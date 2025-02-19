import { TagContaier } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: string
}

const Tag = ({ children, size = 'small' }: Props) => (
  <TagContaier size={size}>{children}</TagContaier>
)

export default Tag
