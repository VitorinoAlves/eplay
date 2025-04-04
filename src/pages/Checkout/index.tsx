import { useState } from 'react'
import { useFormik } from 'formik'
import Button from '../../components/Button'
import Card from '../../components/Card'

import * as S from './styles'

import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  const [purchase, { isLoading, isError, data, isSuccess }] =
    usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      displayName: '',
      cardNumber: '',
      expiredMonth: '',
      expiredYear: '',
      cardCode: '',
      installments: 1
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('O campo é obrigatório'),
      cpf: Yup.string()
        .min(14, 'O campo precisa ter 14 caracteres')
        .max(14, 'O campo precisa ter 14 caracteres')
        .required('O campo é obrigatório'),
      deliveryEmail: Yup.string()
        .email('E-mail inválido')
        .required('O campo é obrigatório'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os emails são diferentes')
        .required('O campo é obrigatório'),

      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cpfCardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      displayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      expiredMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      expiredYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      installments: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.fullName
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          installments: 1,
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            name: values.displayName,
            number: values.cardNumber,
            owner: {
              document: values.cardOwner,
              name: values.cardOwner
            },
            expires: {
              month: 1,
              year: 2023
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const getErrorMessge = (fieldName: string, message?: string) => {
    const isChanged = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isChanged && isInvalid) return message
    return ''
  }

  return (
    <div className="container">
      {!isSuccess ? (
        <form onSubmit={form.handleSubmit}>
          <Card title="Dados de cobrança">
            <>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="fullName">Nome completo</label>
                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessge('fullName', form.errors.fullName)}
                  </small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.values.email}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessge('email', form.errors.email)}</small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cpf">CPF</label>
                  <input
                    id="cpf"
                    type="text"
                    name="cpf"
                    value={form.values.cpf}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{getErrorMessge('cpf', form.errors.cpf)}</small>
                </S.InputGroup>
              </S.Row>
              <h3 className="margin-top">
                Dados de entrega - Conteúdo didigtal
              </h3>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="deliveryEmail">E-mail</label>
                  <input
                    type="email"
                    id="deliveryEmail"
                    name="deliveryEmail"
                    value={form.values.deliveryEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessge('deliveryEmail', form.errors.deliveryEmail)}
                  </small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="confirmDeliveryEmail">
                    Confirme o e-mail
                  </label>
                  <input
                    type="email"
                    id="confirmDeliveryEmail"
                    name="confirmDeliveryEmail"
                    value={form.values.confirmDeliveryEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMessge(
                      'confirmDeliveryEmail',
                      form.errors.confirmDeliveryEmail
                    )}
                  </small>
                </S.InputGroup>
              </S.Row>
            </>
          </Card>
          <Card title="Pagamento">
            <>
              <S.TabButton
                onClick={() => setPayWithCard(false)}
                isActive={!payWithCard}
              >
                Boleto bancário
              </S.TabButton>
              <S.TabButton
                onClick={() => setPayWithCard(true)}
                isActive={payWithCard}
              >
                Cartão de crédito
              </S.TabButton>

              <div className="margin-top">
                {payWithCard ? (
                  <>
                    <S.Row>
                      <S.InputGroup>
                        <label htmlFor="cardOwner">
                          Nome titular do cartão
                        </label>
                        <input
                          type="text"
                          id="cardOwner"
                          name="cardOwner"
                          value={form.values.cardOwner}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessge('cardOwner', form.errors.cardOwner)}
                        </small>
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cpfCardOwner">
                          CPD do titular do cartão
                        </label>
                        <input
                          type="text"
                          id="cpfCardOwner"
                          name="cpfCardOwner"
                          value={form.values.cpfCardOwner}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessge(
                            'cpfCardOwner',
                            form.errors.cpfCardOwner
                          )}
                        </small>
                      </S.InputGroup>
                    </S.Row>

                    <S.Row marginTop="24px">
                      <S.InputGroup>
                        <label htmlFor="displayName">Nome no cartão</label>
                        <input
                          type="text"
                          id="displayName"
                          name="displayName"
                          value={form.values.displayName}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessge(
                            'displayName',
                            form.errors.displayName
                          )}
                        </small>
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={form.values.cardNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessge('cardNumber', form.errors.cardNumber)}
                        </small>
                      </S.InputGroup>
                      <S.InputGroup maxWidth="123px">
                        <label htmlFor="expiredMonth">Mês de vencimento</label>
                        <input
                          type="text"
                          id="expiredMonth"
                          name="expiredMonth"
                          value={form.values.expiredMonth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessge(
                            'expiredMonth',
                            form.errors.expiredMonth
                          )}
                        </small>
                      </S.InputGroup>
                      <S.InputGroup maxWidth="123px">
                        <label htmlFor="expiredYear">Ano de vencimento</label>
                        <input
                          type="text"
                          id="expiredYear"
                          name="expiredYear"
                          value={form.values.expiredYear}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessge(
                            'expiredYear',
                            form.errors.expiredYear
                          )}
                        </small>
                      </S.InputGroup>
                      <S.InputGroup maxWidth="48px">
                        <label htmlFor="cardCode">CVV</label>
                        <input
                          type="text"
                          id="cardCode"
                          name="cardCode"
                          value={form.values.cardCode}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMessge('cardCode', form.errors.cardCode)}
                        </small>
                      </S.InputGroup>
                    </S.Row>

                    <S.Row marginTop="24px">
                      <S.InputGroup maxWidth="150px">
                        <label htmlFor="installments">Parcelamento</label>
                        <select
                          name="installments"
                          value={form.values.installments}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        >
                          <option>1x de R$ 200,00</option>
                          <option>2x de R$ 200,00</option>
                          <option>3x de R$ 200,00</option>
                        </select>
                        <small>
                          {getErrorMessge(
                            'installments',
                            form.errors.installments
                          )}
                        </small>
                      </S.InputGroup>
                    </S.Row>
                  </>
                ) : (
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Distinctio, blanditiis asperiores. Exercitationem labore
                    dolores dolor? Molestiae soluta quasi consequuntur tempore
                    facilis ipsa. Rerum nemo perferendis debitis veritatis
                    temporibus beatae unde.
                  </p>
                )}
              </div>
            </>
          </Card>
          <Button
            type="button"
            onClick={form.handleSubmit}
            title="Clique aqui para finalizar a compra"
          >
            Finalizar compra
          </Button>
        </form>
      ) : (
        <Card title="Muito obrigado">
          <>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              similique ab sit reiciendis nemo expedita deserunt? Atque magnam
              fugit delectus, quia incidunt repellat! Accusantium consequuntur
              cum, iusto exercitationem ut amet! <br />
              Número do pedido: {data.orderId} <br />
              Forma de pagamento:{' '}
              {payWithCard ? 'Cartão de crédito' : 'Boleto Bancário'}
            </p>
            <p className="margin-top">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              similique ab sit reiciendis nemo expedita deserunt? Atque magnam
              fugit delectus, quia incidunt repellat! Accusantium consequuntur
              cum, iusto exercitationem ut amet!
            </p>
            <p className="margin-top">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              similique ab sit reiciendis nemo expedita deserunt? Atque magnam
              fugit delectus, quia incidunt repellat! Accusantium consequuntur
              cum, iusto exercitationem ut amet!
            </p>
            <p className="margin-top">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              accusantium atque voluptatem a excepturi, esse dicta, fugiat
              explicabo id iure aspernatur fugit porro ipsa rem illo accusamus
              quidem! Provident, sint.
            </p>
          </>
        </Card>
      )}
    </div>
  )
}

export default Checkout
