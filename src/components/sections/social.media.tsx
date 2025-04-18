import { FaFacebook, FaLinkedinIn } from 'react-icons/fa6'

interface IProps {
  linkedin: string
  facebook: string
}

const SocialMedia = (props: IProps) => {
  const { linkedin, facebook } = props

  return (
    <div className="my-4 d-flex items-center gap-3">
      <a href={facebook} target="_blank" className="highlight" title="Facebook">
        <FaFacebook size={30} />
      </a>
      <a href={linkedin} target="_blank" className="highlight" title="linkedin">
        <FaLinkedinIn size={30} />
      </a>
    </div>
  )
}

export default SocialMedia
