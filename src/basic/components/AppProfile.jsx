import "./App.css";
import Profile from "./components/Profile";
import Avatar from "./components/avatar";
function AppProfile() {
  const handClick=()=>{

  }
  return (
    <>
    <button onClick={handClick}></button>
      <Avatar
        image="https://i.namu.wiki/i/MBFaqxUn3ELyfSSM5BLEUp2sElJzhqn8vuZuYZT4oaZKsVlVfXfMzllQ3z8xdNbfsiGUYXljGmxliMgsJtPH7C5eHDbCkc6Y1HkNzOGhlnOX7sSCbrfAb1GdZnAqaqPOSPbcYF-Mv452FspQCzoNcQ.webp"
        isNew="true"
      />

      <Profile
        image="https://i.namu.wiki/i/MBFaqxUn3ELyfSSM5BLEUp2sElJzhqn8vuZuYZT4oaZKsVlVfXfMzllQ3z8xdNbfsiGUYXljGmxliMgsJtPH7C5eHDbCkc6Y1HkNzOGhlnOX7sSCbrfAb1GdZnAqaqPOSPbcYF-Mv452FspQCzoNcQ.webp"
        name="가구야 공주 이야기"
        info="공주가 지은 죄와 벌"
      />

      <Profile
        image="https://i.namu.wiki/i/JS1mJ3AEVjyslyoto8yo_zxto7eA8raAPJQpVPz63yrln8U4ardvqW-ybbFPQcraqUzwp5Hg1GY26RgmId0J12dRfiVpsTYhOMBuRjZo6lc_MgXOKLJOZ8fuPsbYxBv1URXSu8UZ2l2lAazUjzhd8Q.webp"
        isNew="true"
        name="그대들은 어떻게 살 것인가"
        info="미야자키 하야오 10.25 개봉"
      />
      <Profile
        image="https://i.namu.wiki/i/c7fS0-GflkdUGhSMDItTK_X9zeTtQzIyVX7ZSSkaXSqzBYSwtE7rVyxVANC6IEhKDNmAhEiUkYnYwKO1ftfALuhCnHaic0uhFbkP1QYWeX99Xv6BiPpAsU54v-piELFv2C6oDHh2pvP2fhXrvsA2PQ.webp"
        name="벼랑 위의 포뇨"
        info="모두가 반해버린 사랑스런 소녀가 온다!"
      />
    </>
  );
}

export default AppProfile;
