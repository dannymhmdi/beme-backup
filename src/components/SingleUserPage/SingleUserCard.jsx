"use client";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { BasePage } from "../base-page";
import Image from "next/image";
import BadgeAvatar from "../Generals/Avatar/Avatar";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";

const SingleUserCard = ({ singleUserData }) => {
  console.log("singleUserData", singleUserData);
  const [images, email, fields] = [
    singleUserData.image,
    singleUserData.email,
    singleUserData.fields,
  ];
  return (
    <BasePage fixed={true} className={" bg-white px-0"}>
      <Card className="px-4 py-2 sm:px-0">
        <div className="flex flex-row flex-wrap">
          <div className="w-full sm:w-6/12 lg:w-5/12 xl:w-4/12 relative h-[567px]">
            <Image
              src={images[0]}
              className="rounded-md"
              fill
              alt="user-image"
            />
          </div>
          <CardContent className="border-4 border-red-600 w-full sm:w-6/12 lg:w-7/12 xl:w-8/12">
            <div className="borders w-full flex flex-row justify-between">
              <div>
                <Typography gutterBottom variant="h5" component="div">
                  برنامه نویس باش
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  color="text.secondary"
                  className="text-justify"
                >
                  تهران &nbsp; توسعه و ساخت فروشگاه آنلاین
                </Typography>
                <Typography variant="body2" gutterBottom color="text.secondary">
                  تجربه هنر و طراحی
                </Typography>
                <Typography variant="body2" gutterBottom color="text.secondary">
                  با <span className="text-teal-400 font-bold">{email}</span>{" "}
                  راهنمایی شو
                </Typography>
              </div>
              <div className="borders flex items-center justify-center sm:items-end w-3/12">
                <BadgeAvatar image={images[0]} />
              </div>
            </div>
            <Divider className="mt-5" />

            <div className="borders w-full">
              <div>
                <div className="my-2">
                  <WatchOutlinedIcon
                    fontSize="small"
                    className="me-2 inline-block"
                  />
                  <Typography variant="body1" className="inline-block">
                    در مجموع 8 ساعت
                  </Typography>
                </div>
                <div className="my-2">
                  <QuestionAnswerOutlinedIcon
                    fontSize="small"
                    className="me-2 inline-block"
                  />
                  <Typography variant="body1" className="inline-block">
                    پیش نیاز بلد بودن زبان انگلیسی
                  </Typography>
                </div>
              </div>
            </div>
            <Divider className="mt-5" />

            <div className="borders w-full mt-2">
              <Typography variant="body1" className="font-bold" gutterBottom>
                درباره محمد
              </Typography>
              <Typography variant="body2" gutterBottom className="text-justify">
                من بنیانگذار Concept Buro هستم و بیش از 20 سال تجربه در طراحی
                داخلی دارم. از سال 2018، من در لس آنجلس مستقر هستم. فارغ التحصیل
                از کالج هنر و طراحی سنترال سنت مارتینز در لندن. من در ایجاد
                فضاهای چند وجهی مسکونی، هتل، تجاری و خرده فروشی تخصص دارم.
                Concept Buro بیش از 150 پروژه را در سراسر جهان از جمله ایالات
                متحده، مراکش، ایتالیا، فرانسه، روسیه، بریتانیا و غیره تکمیل کرده
                است.
              </Typography>
            </div>
            <Divider className="mt-5" />

            <div className="borders w-full mt-2">
              <Typography variant="body1" className="font-bold" gutterBottom>
                این تجربه کاری درباره چیست
              </Typography>
              {/* <Typography variant="body2" gutterBottom className="text-justify"> */}
              طرح کلی : <br />
              <ul className="list-disc list-inside px-4 text-justify">
                <li>
                  جلسه مقدماتی مقدماتی مراحل طراحی پروژه نرم افزار طراحی داخلی
                  راه های ارائه پروژه به مشتری
                </li>
                <li>ایجاد قرارداد (قیمت، مراحل کار)</li>
                <li>
                  مقدمه ای بر اصول توسعه شرایط مرجع مشتری (شرایط مرجع به دریافت
                  مراجع دقیق از مشتریان و همچنین درک ترجیحات سبک آنها و جلوگیری
                  از سوء تفاهم کمک می کند)
                </li>
                <li>
                  توسعه مفهوم طراحی (چه چیزی را در هنگام انتخاب یک سبک در نظر
                  بگیریم)
                </li>
                <li>
                  درک اولیه از ترکیب یک پروژه طراحی، دکوراسیون پروژه، و پروژه
                  طرح (مجموعه ای از نقشه ها)
                </li>
                <li>
                  توسعه مشخصات برای مواد تکمیل تزئینی، مبلمان، وسایل و لوازم
                  جانبی
                </li>
                <li>
                  بازدید از سایت، یک دوره مختصر ابعاد، و فیلمبرداری/عکسبرداری
                  برای طراحی
                </li>
                <li>استراحت ناهار</li>
                <li>بازدید از نمایشگاه (1-2)، انتخاب مواد برای برگه مشخصات</li>
                <li>
                  نکاتی در مورد ارتقاء طراح داخلی در رسانه های اجتماعی و وب سایت
                  شخصی
                </li>
              </ul>
              {/* </Typography> */}
            </div>
            <Divider className="mt-5" />

            <div className="borders w-full mt-2">
              <Typography variant="body1" className="font-bold" gutterBottom>
                کی میتونه بیاد
              </Typography>
              <Typography variant="body2" gutterBottom className="text-justify">
                افراد بالای 18 سال اجازه حضور دارند
              </Typography>
            </div>
            <Divider className="mt-5" />
            <div className="borders w-full mt-2">
              <Typography variant="body1" className="font-bold" gutterBottom>
              3 مهمان می توانند شرکت کنند
              </Typography>
            </div>
            <Divider className="mt-5" />
          </CardContent>
        </div>
      </Card>
    </BasePage>
  );
};

export default SingleUserCard;
