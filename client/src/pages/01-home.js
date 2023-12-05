import CarouselSlider from "../components/animations/carouselSlider"
import BasicStatistics from "../components/animations/statsAnimation"
import Card1 from "../components/cards/card1"
import { VStack } from "@chakra-ui/react"


const Home = () => {

    const messageFromPresident = {
        presidentImage: "1617604338_president.png",
        folderName: "presidentImage",
        title: "Message From The National President",
        text: "Snippy is a rich coding snippets app that lets you create your own code snippets, categorize them, and even sync them in the cloud so you can use them anywhere. All that is free!",
        sortUpToDown: true
    }

    const messageFromExecutiveDirector = {
        presidentImage: "images (12).jpeg",
        folderName: "executiveDirectorImage",
        title: "Message From Executive Director",
        text: "And even sync them in the cloud so you can use them anywhere. All that is free! Snippy is a rich coding snippets app that lets you create your own code snippets, categorize them, ",
        sortUpToDown: false
    }

    return (
        <>
            <VStack>
                <CarouselSlider />
                {/* MESSAGE FROM PRESIDENT */}
                <Card1 data = {messageFromPresident} />
                {/* MESSAGE FROM ED */}
                <Card1 data = {messageFromExecutiveDirector} />
                {/* STATS */}
                <BasicStatistics />
            </VStack>
        </>
    )
}

export default Home