import Image from "next/image";
import ellipse from "../public/assets/ellipse.png";
import logo from "../public/assets/logo.png";
import flower_pic from "../public/assets/Close Up.png";
import bouquet_pic from "../public/assets/Flowers.png";
import delivery_pic from "../public/assets/Motorcycle Delivery Single Box.png";
import service_pic from "../public/assets/Group Task.png";

export default function Home() {
  return (
    <main className="relative flex flex-col size-full items-center">
      <div className="flex-none">
        <div className="relative z-10 my-10 w-full">
          <p className="text-darkseagreen text-8xl font-bold font-zhi-mang-xing">
            花动创意公司
          </p>
          <span className="absolute z-20 -top-10 left-1/2 transform -translate-x-1/2 size-[650px]">
            <Image src={logo} alt="logo" />
          </span>
        </div>

        <span className="fixed -top-24 left-0 right-0 z-[-1]">
          <svg
            width="1920"
            height="641"
            viewBox="0 0 1920 641"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0H1920V594.86C1920 594.86 1842.67 616.355 1572 638.85C1301.33 661.345 542 499.383 328 522.377C114 545.372 0 594.86 0 594.86V0Z"
              fill="#FEFDED"
            />
          </svg>
        </span>
      </div>

      <div className="flex-1 grid grid-cols-4 items-end gap-40 mb-24 mx-20">
        <div>
          <div className="rounded-full w-28 h-28 bg-lightgoldenrodyellow drop-shadow-md mb-5 mx-auto">
            <Image
              className="object-scale-down size-full"
              src={flower_pic}
              alt="flower"
            ></Image>
          </div>
          <div className="text-salmon">
            <h2 className="font-zhi-mang-xing font-medium text-3xl text-center">
              精心挑选的花卉
            </h2>
            <p className="font-zcool-kuaile text-lg text-center leading-tight">
              我们精选新鲜花卉，为您提供高品质花束和花卉装饰。
            </p>
          </div>
        </div>
        <div>
          <div className="rounded-full w-28 h-28 bg-lightgoldenrodyellow drop-shadow-md mb-5 mx-auto">
            <Image
              className="object-scale-down size-full"
              src={bouquet_pic}
              alt="bouquet"
            />
          </div>
          <div className="text-salmon">
            <h2 className="font-zhi-mang-xing font-medium text-3xl text-center">
              个性化定制
            </h2>
            <p className="font-zcool-kuaile text-lg text-center leading-tight">
              根据您的需求，我们提供个性化定制服务，让每份花束都独具特色。
            </p>
          </div>
        </div>
        <div>
          <div className="rounded-full w-28 h-28 bg-lightgoldenrodyellow drop-shadow-md mb-5 mx-auto">
            <Image
              className="object-scale-down size-full"
              src={delivery_pic}
              alt="delivery"
            ></Image>
          </div>
          <div className="text-salmon">
            <h2 className="font-zhi-mang-xing font-medium text-3xl text-center">
              快递送达
            </h2>
            <p className="font-zcool-kuaile text-lg text-center leading-tight">
              我们提供快捷可靠的配送服务，确保您的花卉及时送达目的地。
            </p>
          </div>
        </div>
        <div>
          <div className="rounded-full w-28 h-28 bg-lightgoldenrodyellow drop-shadow-md mb-5 mx-auto">
            <Image
              className="object-scale-down size-full"
              src={service_pic}
              alt="service"
            ></Image>
          </div>
          <div className="text-salmon">
            <h2 className="font-zhi-mang-xing font-medium text-3xl text-center">
              周到的售后服务
            </h2>
            <p className="font-zcool-kuaile text-lg text-center leading-tight">
              我们的售后团队随时为您提供周到服务，确保您的满意度。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
