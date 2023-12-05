'use client'

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Flex
        bg="blue.700"
        color="white"
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor="gray.500"
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
          color="white"
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color="white"
            cursor="default"
            >
            Logo
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = "white"

  return (
    <Stack direction={'row'} spacing={4} >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                rounded={10}
                color={linkColor}
                _hover={{
                  bg:"white",
                  color: "blue.700",
                }}>
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg="blue.700"
                
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: "white", color: "blue.700" }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'blue.700' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'blue.700'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  )
}

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
      borderBottomRadius={10}
      color="blue.600"
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
          borderRadius: 10
        }}>
        <Text fontWeight={600}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
      color="blue.600"

          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

interface NavItem {
  label: string,
  subLabel?: string,
  children?: Array<NavItem>,
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: 'About Us',
    children: [
      {
        label: 'Historical background',
        subLabel: 'Narrative, Historical Photos',
        href: '#',
      },
      {
        label: 'Key Message',
        href: '#',
      },
      {
        label: 'Core Values',
        subLabel: 'VMGO / Core Value, Thematic Areas',
        href: '#',
      },
      {
        label: 'Advisory',
        subLabel: 'Patron, Advisory, Board, Executive Committe',
        href: '#',
      },
      {
        label: 'Staff',
        subLabel: 'Central Staff, District Staff',
        href: '#',
      },
    ],
  },
  {
    label: 'Outreach',
    children: [
      {
        label: 'National Affiliation',
        href: '#',
      },
      {
        label: 'International Affiliation',
        href: '#',
      },
      {
        label: 'Network And Group Facilitated',
        href: '#',
      },
    ],
  },
  {
    label: 'Punblications & Resources',
    href: '#',
    children: [
      {
        label: 'Blog',
        href: '#',
      },
      {
        label: 'Court Desicion',
        href: '#',
      },
      {
        label: 'Booklets',
        href: '#',
      },
      {
        label: 'Research',
        href: '#',
      },
      {
        label: 'Success Stories',
        href: '#',
      },
      {
        label: 'magazine',
        href: '#',
      },
      {
        label: 'Case Studies',
        href: '#',
      },
      {
        label: 'Good Practices',
        subLabel: 'Lesson Learned',
        href: '#',
      },
      {
        label: 'Recommendations',
        href: '#',
      },
    ],
  },
  {
    label: 'Programmes',
    href: '#',
    children: [
      {
        label: 'Human Rights',
        subLabel: 'Non-discrimination & Social Justice',
        href: '#',
      },
      {
        label: 'Democratic Governence',
        subLabel: 'Inclusion & Accountablity',
        href: '#',
      },
      {
        label: 'Education',
        subLabel: 'Access To Education & Life Skills',
        href: '#',
      },
      {
        label: 'Livelihood Empowerment',
        href: '#',
      },
      {
        label: 'Campign & Movement',
        href: '#',
      }
    ],
  },
  {
    label: 'Projects',
    href: '#',
    children: [
      {
        label: 'Current',
        href: '#',
      },
      {
        label: 'Completed',
        href: '#',
      }
    ],
  },
  {
    label: 'Gallery',
    href: '#',
    children: [
      {
        label: 'Photos',
        href: '#',
      },
      {
        label: 'Videos',
        href: '#',
      },
      {
        label: 'Documantaries',
        href: '#',
      }
    ],
  },
  {
    label: 'Notices',
    href: '#',
    children: [
      {
        label: 'Procurement',
        href: '#',
      },
      {
        label: 'Vacancy',
        href: '#',
      },
      {
        label: 'Other Notices',
        href: '#',
      },
      {
        label: 'Online Application',
        href: '#',
      },
      {
        label: 'Subscribe',
        href: '#',
      }
    ],
  },
  {
    label: 'Contact Us',
    href: '#',
    children: [
      {
        label: 'Feedbacks',
        href: '#',
      },
      {
        label: 'Forms',
        href: '#',
      },
      {
        label: 'FDorms & Formats',
        href: '#',
      },
      {
        label: 'FIR Form',
        href: '#',
      },
      {
        label: 'Important Links',
        href: '#',
      }
    ],
  },
 
]