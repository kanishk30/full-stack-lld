import React from 'react'

function useVisibility(initialVisibility = false) {
    const [isVisible, setIsVisible] = React.useState(initialVisibility);

    const show = () => {
        setIsVisible(true)
    }

    const hide = () => {
        setIsVisible(false)
    }

    const toggle = () => {
        setIsVisible(prev => !prev)
    }

    return {
        isVisible,
        show,
        hide,
        toggle
    }
}

export default useVisibility;