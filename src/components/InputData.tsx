import { Text, Box, Button, Input, Flex } from '@chakra-ui/react'
import React from 'react'

type InputDataProps = {
    title: string
    setValue: Function
    isInt?: boolean
    value: number
}

const InputData = ({title, setValue, isInt, value}:InputDataProps) => {
  return (
    <Box boxShadow={'-2px 1px 81px 13px rgba(210,0,255,0.5)'} p="10" borderRadius={'xl'}>
        <Flex justify={'center'} direction={'row'} gap={3} align={'center'} wrap ={'wrap'}>
            <Text fontSize={'xl'} fontWeight={'bold'}>{title + ":"}</Text>
            <Input maxWidth={'1000px'}  value={value} type="number" onChange={event => {
                if (isInt){
                    setValue(parseInt(event.target.value))
                } else {
                    setValue(parseFloat(event.target.value))
                }
                
            }}></Input>
        </Flex>
        
    </Box>
  )
}


export default InputData