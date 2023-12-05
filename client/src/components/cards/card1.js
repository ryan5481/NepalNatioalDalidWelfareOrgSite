import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react'

const Card1 = ({data}) => {
  return (
    <Container maxW={'7xl'}>
      

        {data.sortUpToDown ? 
        (<Stack
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: 'column', md: 'row' }}>
                {/* IMAGE */}
            <Flex
              flex={1}
              justify={'center'}
              align={'center'}
              position={'relative'}
              w={'full'}>
              
              <Box
                position={'relative'}
                height={'300px'}
                rounded={'2xl'}
                boxShadow={'2xl'}
                width={'full'}
                overflow={'hidden'}>
                
                <Image
                  alt={'Hero Image'}
                  fit={'cover'}
                  align={'center'}
                  w={'100%'}
                  h={'100%'}
                  src={require(`../../uploads/${data.folderName}/${data.presidentImage}`)}
                />
              </Box>
            </Flex>
            {/* TEXT */}
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                <Text as={'span'} color={'blue.400'}>
                {data?.title}
                </Text>
              </Heading>
              <Text color={'gray.500'}>
              {data?.text}
              </Text>
              <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                <Button
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'normal'}
                  px={6}
                  colorScheme={'blue'}
                  bg={'blue.400'}
                  _hover={{ bg: 'blue.500' }}>
                  Read more
                </Button>
                
              </Stack>
            </Stack>
          </Stack>)
        
        :
        (<Stack
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: 'column', md: 'row' }}>
            {/* TEXT */}
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                <Text as={'span'} color={'blue.400'}>
                {data?.title}
                </Text>
              </Heading>
              <Text color={'gray.500'}>
              {data?.text}
              </Text>
              <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
                <Button
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'normal'}
                  px={6}
                  colorScheme={'blue'}
                  bg={'blue.400'}
                  _hover={{ bg: 'blue.500' }}>
                  Read more
                </Button>
                
              </Stack>
            </Stack>
            {/* IMAGE */}
            <Flex
              flex={1}
              justify={'center'}
              align={'center'}
              position={'relative'}
              w={'full'}>
              
              <Box
                position={'relative'}
                height={'300px'}
                rounded={'2xl'}
                boxShadow={'2xl'}
                width={'full'}
                overflow={'hidden'}>
                
                <Image
                  alt={'Hero Image'}
                  fit={'cover'}
                  align={'center'}
                  w={'100%'}
                  h={'100%'}
                  src={require(`../../uploads/${data.folderName}/${data.presidentImage}`)}
                />
              </Box>
            </Flex>
          </Stack>)
        }
        
    </Container>
  )
}



export default Card1