import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
//import { ReactComponent as GenderIcon } from "src/images/demo/gender.jpg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
//import { ReactComponent as FollowersIcon } from "src/images/demo/instagram.jpg"
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import { useHistory, Link } from "react-router-dom";

const Container = tw.div`relative`;
const Content = tw.div`mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col  sm:border min-w-sm max-w-sm  sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const GenderInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: "https://source.unsplash.com/OXZI7Si8JCU/",
      name: "Rachel So",
      gender: "F",
      comments:"13897",
      likes:"12132",
      description: "Dance",
      followers: "13401",
      activeloc: "HK",
      ID:1,
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1597460970375-1449df2fb73a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
      name: "Tracy Ho",
      gender: "F",
      comments:"67277",
      likes:"92328",
      description: "Gym",
      followers: "20441",
      activeloc: "HK",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1597439482746-a8b0cd1768e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      name: "Marya Volk",
      gender: "F",
      comments:"9281",
      likes:"82289",
      description: "Lifestyle",
      followers: "3040",
      activeloc: "US",
    },
    {
      imageSrc: "https://source.unsplash.com/oQmsJCeYH2c/",
      name: "Jessica Dharmawangsa",
      gender: "F",
      description: "Food",
      comments:"8192",
      likes:"19221",
      followers: "2040",
      activeloc: "ID",
      ID:2,
    },
    {
      imageSrc: "https://source.unsplash.com/SS0PaWpkm8w",
      name: "Nicholas Chandra",
      gender: "M",
      comments:"8278",
      likes:"2067",
      description: "Game",
      followers: "305",
      activeloc: "ID",
    },

  ]

  const history = useHistory();

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Choose Your Influencer</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.name}</Title>
                  <GenderInfo>
                    <Rating>{card.gender}</Rating>
                  </GenderInfo>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <LocationIcon />
                    </IconContainer>
                    <Text>{card.activeloc}</Text>
                  </IconWithText>
                  <IconWithText>
                    <IconContainer>
                      <StarIcon />
                    </IconContainer>
                    <Text>{card.followers}</Text>
                  </IconWithText>
                </SecondaryInfoContainer>
                <Description>{card.description}</Description>
              </TextInfo>
              <Link to={{
                pathname: '/influencer',
                state: {
                  cardObj: card
                }
              }} >
              <PrimaryButton> Select Influencer</PrimaryButton>
              </Link>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
