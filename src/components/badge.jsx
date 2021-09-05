import React from 'react'

const Badge = ({quality}) => <span style={quality.style} className={`badge bg-${quality.color} mx-1`}>{quality.name}</span>

export default Badge
