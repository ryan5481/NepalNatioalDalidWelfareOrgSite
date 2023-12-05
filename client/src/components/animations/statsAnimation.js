import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { BsPerson, BsPeopleFill } from 'react-icons/bs';
import { SiAwsorganizations } from "react-icons/si";
import { SlOrganization } from "react-icons/sl";
import { IoIosPeople } from "react-icons/io";
import { FaMoneyBillTrendUp, FaUserDoctor } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import { MdFolderSpecial } from "react-icons/md";
import { ImHammer2 } from "react-icons/im";
import { GoLaw } from "react-icons/go";
import { FaMapSigns, FaHandshake } from "react-icons/fa";


interface StatsCardProps {
    title: string;
    stat: string;
    icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
    const { title, stat, icon } = props;
    return (
        <Stat
            m={2}
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor='blue.400'
            color='blue.400'
            rounded={'lg'}>
            <Flex justifyContent={'space-between'}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontSize={'xl'} fontWeight={'medium'} isTruncated>
                        {title}
                    </StatLabel>
                    <StatNumber fontSize={'5xl'} fontWeight={'bold'}>
                        {stat}
                    </StatNumber>
                </Box>
                <Box
                    my={'auto'}
                    color='blue.400'
                    alignContent={'center'}>
                    {icon}
                </Box>
            </Flex>
        </Stat>
    );
}

export default function BasicStatistics() {

    const statistics = [
        {
            title: "Organization Branches",
            number: "5687",
            icon: <SiAwsorganizations size={'4em'} />
        },
        {
            title: "National Networking",
            number: "5687",
            icon: <SlOrganization size={'4em'} />
        },
        {
            title: "Leadership Development",
            number: "5687",
            icon: <IoIosPeople size={'4em'} />
        },
        {
            title: "Economic Empowerment",
            number: "5687",
            icon: <FaMoneyBillTrendUp size={'4em'} />
        },
        {
            title: "Educational Support",
            number: "5687",
            icon: <PiStudentBold size={'4em'} />
        },
        {
            title: "Project Benificiaries",
            number: "5687",
            icon: <MdFolderSpecial size={'4em'} />
        },
        {
            title: "Medical Professionals",
            number: "5687",
            icon: <FaUserDoctor size={'4em'} />
        },
        {
            title: "Public Service Personnels",
            number: "5687",
            icon: <BsPeopleFill size={'4em'} />
        },
        {
            title: "Volunteer / Social Workers",
            number: "5687",
            icon: <FaHandshake size={'4em'} />
        },
        {
            title: "CBD Cases",
            number: "5687",
            icon: <ImHammer2 size={'4em'} />
        },
        {
            title: "CBD Justices",
            number: "5687",
            icon: <GoLaw size={'4em'} />
        },
        {
            title: "Campigns , Movements",
            number: "5687",
            icon: <FaMapSigns size={'4em'} />
        },
    ]
    return (
        <Box maxW="9xl" m={'5'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            <chakra.h1
                textAlign={'center'}
                fontSize={'4xl'}
                py={10}
                fontWeight={'bold'}
                color="blue.400"
            >
                Major Achievements
            </chakra.h1>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={{ base: 5, sm: 8, md: 3, lg: 4, xl: 6  }}>

                {statistics.map((item, id) => {
                    return (
                        <>
                            <StatsCard
                                title={item.title}
                                stat={item.number}
                                icon={item.icon}
                            />
                        </>
                    )
                })}
            </SimpleGrid>
        </Box>
    );
}

