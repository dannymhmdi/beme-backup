"use-client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useState } from "react";
import { Suspense } from "react";
import Loading from "app/loading";
import { CardActionArea } from "@mui/material";
const CardMedia = React.lazy(() => import("@mui/material/CardMedia"))
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  console.log("expand", expand);
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardMui({ userData,alert }) {
  const [expanded, setExpanded] = useState(-1);
  const [openExpandCard , setOpenExpandCard] = useState(false)
  const handleExpandClick = (expandedCard) => {
    // setExpanded(!expanded);
    setOpenExpandCard(!openExpandCard)
    setExpanded(expandedCard)
  };

  const image = [
    "https://raw.githubusercontent.com/dannymhmdi/beme-images/master/developer.jpeg",
    "https://raw.githubusercontent.com/dannymhmdi/beme-images/master/mechanic.jpeg",
    "https://raw.githubusercontent.com/dannymhmdi/beme-images/master/teacher.jpg",
  ];

  return (
    <div className="border-2s border-light-blue p-2 flex flex-row flex-wrap  pb-12">
      {userData?.apiData?.length
        ? userData.apiData.map((host, i) => {
            return (
              <div
                key={i}
                className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 border-2s border-red-700s px-4 pb-4"
              >
                <Card>
                  <CardActionArea href={`/become-guide/${host.id}`}>
                  <CardHeader
                    avatar={
                      <Avatar  className="me-3 bg-teal-500" aria-label="recipe">
                        R
                      </Avatar>
                    }
                    // action={
                    //   <IconButton aria-label="settings">
                    //     <MoreVertIcon />
                    //   </IconButton>
                    // }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                  />

                  <Swiper
                    pagination={{
                      type: "progressbar",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="cursor-pointer block"
                  >
                    {(host?.image || []).map((img, j) => {
                      return (
                        <SwiperSlide key={`${i}-${j}`}>
                          <div className="w-full relative h-full">
                          <Suspense fallback={<Loading/>}>
                          <CardMedia
                              component={"img"}
                              height="194"
                              image={img}
                              alt={host.username}
                            />
                          </Suspense>
                            {/* <span className="material-symbols-outlined">
                              favorite
                            </span> */}
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                  <CardContent>
                    <Typography variant="body2" className="text-dark">
                      خواننده شو Lorem, ipsum dolor sit amet consectetur
                      adipisicing elit. Ullam cum nemo deserunt tempora,
                      reiciendis labore, recusandae quas aspernatur cupiditate
                      earum, aliquam quae fuga alias. Pariatur, cumque. Unde
                      error quod vitae!
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      خواننده شو
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    {/* <ExpandMore
                      expand={openExpandCard}
                      onClick={() => handleExpandClick(i)}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore> */}
                  </CardActions>
                  {/* <Collapse in={ openExpandCard && expanded == i} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>Method:</Typography>
                      <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add
                        saffron and set aside for 10 minutes.
                      </Typography>
                      <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large,
                        deep skillet over medium-high heat. Add chicken, shrimp
                        and chorizo, and cook, stirring occasionally until
                        lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo
                        in the pan. Add pimentón, bay leaves, garlic, tomatoes,
                        onion, salt and pepper, and cook, stirring often until
                        thickened and fragrant, about 10 minutes. Add saffron
                        broth and remaining 4 1/2 cups chicken broth; bring to a
                        boil.
                      </Typography>
                      <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with
                        artichokes and peppers, and cook without stirring, until
                        most of the liquid is absorbed, 15 to 18 minutes. Reduce
                        heat to medium-low, add reserved shrimp and mussels,
                        tucking them down into the rice, and cook again without
                        stirring, until mussels have opened and rice is just
                        tender, 5 to 7 minutes more. (Discard any mussels that
                        don&apos;t open.)
                      </Typography>
                    </CardContent>
                  </Collapse> */}
                  </CardActionArea>
                </Card>
              </div>
            );
          })
        : alert.message ? 'خطای پردازش':userData.status ?'نتیجه ای یافت نشد': "صبر کنید ..."}
    </div>
  );
}

// <Link href={`/become-guide/${host?.id}`}>
// <Swiper
//   pagination={{
//     type: "progressbar",
//   }}
//   navigation={true}
//   modules={[Pagination, Navigation]}
//   className="border-4s border-teal-400s h-full border-4s rounded-lg cursor-pointer"
// >
//   {(host?.image || []).map((img, index) => {
//     return (
//       <SwiperSlide key={index}>
//         <div className="w-full relative h-full">
//           <Image
//             src={img}
//             alt="photo"
//             // className="size-full"
//             fill
//             quality={50}
//           />
//           <span className="material-symbols-outlined">
//             favorite
//           </span>
//         </div>
//       </SwiperSlide>
//     );
//   })}
// </Swiper>
// </Link>
