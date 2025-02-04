const PokemonCard = ({ list }) => {
  //아이디 세자리수 정렬
  const setThreeNum = String(list.id).padStart(3, "0");
  console.log(setThreeNum);

  return (
    <li>
      <img src={`${list.img_url}`} />
      <p>{list.korean_name}</p>
      <p>No. {setThreeNum}</p>
      <button>추가</button>
    </li>
  );
};

export default PokemonCard;
