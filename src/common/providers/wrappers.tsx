import React, { PropsWithChildren } from 'react'

export default function Wrappers({ children }: PropsWithChildren) {
    return (
        <>{children}</>
    )
}
