export const increament='INCREAMENT'
export const decreament='DECREAMENT'
export const reset='RESET'

export const increamentAction=()=>(
    {
        type:increament,
    }
)

export const decreamentAction=()=>(
    {
        type:decreament,
    }
)
export const resetAction=()=>(
    {
        type:reset,
    }
)