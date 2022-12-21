import { Center, Heading } from '@chakra-ui/react'
import React from 'react'
type PageTitleProps = {
    title: string
}

const PageTitle = ({title}: PageTitleProps) => {
  return (
    <Center m={20}>
        <Heading>{title}</Heading>
    </Center>
    
  )
}

export default PageTitle