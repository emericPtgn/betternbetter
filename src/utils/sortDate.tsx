import React from 'react'
import { Artiste } from '../type/Artiste'

const sortDate = (programmation : Artiste[]) : Artiste[] => {
    if(!programmation || !Array.isArray(programmation)){
        return []
    }
    const sortedProgrammation = [...programmation].sort((a,b) => {
        const dateA = new Date(a.activities[0]?.date || '').getTime()
        const dateB = new Date(b.activities[0]?.date || '').getTime()
        return dateA - dateB
    })
    return sortedProgrammation
}

export default sortDate
