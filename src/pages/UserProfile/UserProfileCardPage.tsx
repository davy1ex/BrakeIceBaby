import React from 'react'
import ProfileCard from '../../shared/ui/profileCard'

const profileMockUp = {
    picture:
        "https://funny.klev.club/smeh/uploads/posts/2024-04/funny-klev-club-bu5y-p-smeshnie-kartinki-super-sus-18.jpg",
    name: "Супер сус",
    birthday: "01-01-2000",
    description:
        "Всё нормально, я Супер Сус. 20 лет тут лазил, лазию и буду лазить",
};

const UserProfileCardPage = () => {
  return (
    <ProfileCard
        urlPic = {profileMockUp.profilePic}
        firstName = {profileMockUp.profileName}
        profileDesc = {profileMockUp.profileDesc}
    />
  )
}

export default UserProfileCardPage