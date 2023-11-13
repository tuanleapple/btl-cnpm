'use client';
import Image from 'next/image';
import Vector from "../../../public/vector.svg"
import Text from "../../../public/logoText.svg"
import LogoHeader from "../../../public/logoheader.svg"
import Plus from "../../../public/vector-plus.svg"
import Notification from "../../../public/vector-no.svg"
import People from "../../../public/people.svg"
function IndexPage() {
  return (
    <>
    <div className="signUp">
      <div className="price">
        <Image
          priority
          className='logo-image'
          src={Vector}
          alt="truong bach khoa hcm"
        />
        <div className="price-font">100</div>
        <Image
          priority
          className='logo-image'
          src={Plus}
          alt="truong bach khoa hcm"
        />
      </div>
      <div className="price-2">
        <Image
          priority
          className='logo-image'
          src={Vector}
          alt="truong bach khoa hcm"
        />
        <div className="price-font">100</div>
        <Image
          priority
          className='logo-image'
          src={Plus}
          alt="truong bach khoa hcm"
        />
      </div>
      <Image
          priority
          className='logo-notifation'
          src={Notification}
          alt="truong bach khoa hcm"
        />
      <div className="text-signup">Đăng Xuất</div>
    </div>
    <div className="main-header">
        <div className="logo-header">
          <Image
            priority
            className='logo-image'
            src={LogoHeader}
            alt="truong bach khoa hcm"
          />
          <Image
            priority
            className='logo-image'
            src={Text}
            alt="truong bach khoa hcm"
          />
          <Image
            priority
            className='logo-people'
            src={People}
            alt="truong bach khoa hcm"
          />
        </div>
    </div>
    </>
  )
}

export default IndexPage