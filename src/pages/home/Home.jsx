import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Profitcard from "../../components/profitcard/Profitcard";
import Chart from "../../components/chart/Chart";
import authService from "../../api/axios";
import Lastprod from "../../components/lastprod/Lastprod";
// import Bar from "../../components/barchart/BarChart";
import productService from '../../api/productsApi'

function Home() {
  const [dataa, setDataa] = useState([]);

  const [statsdata, setStatsData] = useState([])

  const getProducts = async () => {
    try {
      const { data } = await authService.getProducts();
      setDataa(data);
    } catch (error) {
      console.log(error);
    }
  };
  const [data, setData] = useState(null)

  const getStatsDefault = async () => {
		const db = {
			start_date: '2023-05-06',
			end_date: '2023-07-10',
			id: '',
		}

		const { data } = await productService.getAllStats(db)
    setStatsData(data)
		setData(data)
		localStorage.setItem('total', JSON.stringify(data))
	}
  

  useEffect(() => {
    getProducts();
    getStatsDefault()
  }, []);

  return (
		<div className='home'>
			<div className='home_welcome'>Xush kelibsiz!</div>
			<div className='home_holder'>
				<div className='home_left'>
					<div className='home_left_top'>
						<Profitcard
							type={'dona'}
							db={data?.mahsulotlar_soni}
							desc={'Mahsulotlar'}
						/>
						<Profitcard
							type={"so'm"}
							db={data?.umumiy_daromad}
							desc={'Umumiy daromad'}
						/>
					</div>
					{data && <Chart diagram={data?.mahsulot_diagram} />}
				</div>
				<div className='home_right'>
					<div className='home_last_products'>
						<div className='home_lp_top'>
							<p>Oxirgi mahsulotlar</p>
							<Link to='/products'>Barchasi &gt;</Link>
						</div>
						<div className='home_products'>
							<ul>
								{dataa.slice(dataa.length - 4, dataa.length).map((item, i) => (
									<li key={i}>
										<Lastprod num={i + 1} name={item.nom} price={item.narx2} />
									</li>
								))}
							</ul>
						</div>
					</div>
					{/* <Bar /> */}
				</div>
			</div>
		</div>
	)
}

export default Home;
