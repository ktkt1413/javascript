import './components/style.scss';
import{useRef, useState} from "react";

interface ProductType {
  id:number;
  name:string;
  explanation: string;
  price: number;
}

const App = () => {
  /* 서버 구동 시 불필요 
  const [상태값, 상태지정값] = useState(초기값);
  */
  const [products, setProducts] = useState<ProductType[]>([
    {
      id: 0,
      name: "Iphone 15 Max",
      explanation: "아이폰 설명을 적어줍니다.",
      price: 1230000
    },
    {
      id: 1,
      name: "Ipad pro",
      explanation: "아이패드 설명을 적어줍니다.",
      price: 1500000
    },
  ]);
  const[name, setName] = useState('');
  const[explanation, setExplanation] = useState('');
  const[price, setPrice] = useState(0);
  const fakeId = useRef(1);
  const handleCreate = (newProduct:Omit<ProductType,'id'>) => {
    fakeId.current += 1;
    setProducts([...products,{id:fakeId.current, ...newProduct}]);
  } 

  return(
    <>
    <form
      onSubmit={(event)=>{
        event.preventDefault();
        handleCreate({name, explanation, price});
      }}
    >
      <input
      onChange={(e) => setName(e.target.value)}
      type="text" placeholder="상품명" />
      <input 
      onChange={(e) => setExplanation(e.target.value)}
      type="text" placeholder="상품설명" />
      <input 
      onChange={(e) => setPrice(parseInt(e.target.value, 10))}
      type="number" placeholder="상품가격" />
      <input type="submit" value="상품등록" />
    </form>
      <table className='table'>
        <tr>
          <th>순번</th>
          <th>제품명</th>
          <th>설명</th>
          <th>가격</th>
        </tr>
        {products.map(({id,name,explanation,price})=>(
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{explanation}</td>
            <td>{price}</td>
            <td>
              <button 
              type="button" 
              onClick={() => setProducts(products.filter((product)=>product.id !== id))} 
              >삭제
              </button>
              <button type="button" onClick={()=>{console.log("수정")}}>
              수정
              </button>
            </td>
          </tr>
        ))}

      </table>
    </>
  );
};

export default App;