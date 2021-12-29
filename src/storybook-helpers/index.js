import React from 'react'

import { Button } from '../components'

const UI = {
  Button: Button,
}

export const RenderComponent = ({ components, parentComponent }) => {
  return (
    components.length > 0 &&
    components.map((component, index) => {
      const { props, type } = component
      const ChildComponent = type.includes('.')
        ? parentComponent[type.split('.')[1]]
        : UI[type]

      if (ChildComponent) {
        return component.components ? (
          <ChildComponent key={index} {...props}>
            <RenderComponent
              components={component.components}
              parentComponent={parentComponent}
            />
          </ChildComponent>
        ) : (
          <ChildComponent key={index} {...props} />
        )
      } else {
        return null
      }
    })
  )
}
