import components from './components'

const plugin = {
  install(Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop]
        console.log('component: ', component)
        console.log('component name: ', component.props.componentName.default)
        Vue.component(component.props.componentName.default, component)
      }
    }
  }
}

export default plugin
