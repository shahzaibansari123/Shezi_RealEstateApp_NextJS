import {useContext} from 'react-dom';
import Image from 'next/image'
import {Box, Icon, Flex} from '@chakra-ui/react'
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu'
import {FaArrowCircleLeft,FaArrowCircleRight} from 'raect-icons/fa'

const ImageScrollbar=()=>(
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow: 'hidden'}}></ScrollMenu>
)