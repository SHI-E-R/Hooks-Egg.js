
const Icon = (props) => {

  const IconFont = require('@ant-design/icons')[props.type]
  return (
    <IconFont {...props} />
  )
}

Icon.defaultProps = {
  type: 'SmileOutlined'
}

export default Icon