import React from 'react'
import { Field } from 'redux-form'

export const updateOjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return { ...u, ...newObjProps }
        }
        return u;
    })
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => {
    return <div>
        <Field placeholder={placeholder}
            name={name} component={component}
            validate={validators} {...props} />{text}
    </div>
}