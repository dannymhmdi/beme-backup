"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "./styles.css";
import Link from "next/link";
const PersonsCard = ({ userData, error }) => {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/users", { next: { revalidate: 3600 } })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log("userdata in becomeguide", res);
  //       setUsers(res);
  //     });
  // }, []);
  console.log('userData',userData?.apiData?.length)
  return (
    <>
      <div className="border-2s border-light-blue p-2 flex flex-row flex-wrap  pb-12">
        {userData?.apiData?.length
          ? userData.apiData.map((host, index) => {
              return (
                <div
                  key={index}
                  className="w-6/12 sm:w-4/12 md:w-3/12 lg:w-3/12 md:px-1 lg:px-4 xl:px-6 px-2 pt-3 borders"
                >
                  <div
                    className="flex flex-row flex-wrap rounded-xl border-4s border-light-blues"
                    style={{ height: "470px" }}
                  >
                    <div
                      className="border-2s border-teal-500 w-full"
                      style={{ height: "75%" }}
                    >
                      <Link href={`/become-guide/${host?.id}`}>
                        <Swiper
                          pagination={{
                            type: "progressbar",
                          }}
                          navigation={true}
                          modules={[Pagination, Navigation]}
                          className="border-4s border-teal-400s h-full border-4s rounded-lg cursor-pointer"
                        >
                          {(host?.image || []).map((img, index) => {
                            return (
                              <SwiperSlide key={index}>
                                <div className="w-full relative h-full">
                                  <Image
                                    src={img}
                                    alt="photo"
                                    // className="size-full"
                                    fill
                                    quality={50}
                                  />
                                  <span className="material-symbols-outlined">
                                    favorite
                                  </span>
                                </div>
                              </SwiperSlide>
                            );
                          })}
                        </Swiper>
                      </Link>
                    </div>
                    <div className="flex flex-row text-sm w-full ps-2">
                      <h3 className="text-teal-900">تهران</h3>
                      <span className="px-1 text-teal-900">.</span>
                      <h3 className="text-teal-900">بیزینس</h3>
                    </div>
                    <div className="w-full ps-2">
                      <h3 className="text-dark text-lg font-bold ">
                        خواننده شو
                        <p>{host?.username}</p>
                        <p>{host?.id}</p>
                      </h3>
                      <div className="w-full py-0">
                        <h3 className="text-lg font-thin py-0">
                          2 میلیون تومان برای هر شخص
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : error.message ? 'خطای پردازش':userData.status ?'نتیجه ای یافت نشد': "صبر کنید ..."}
      </div>

    </>
  );
};

export default PersonsCard;
