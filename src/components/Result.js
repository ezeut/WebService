import '../css/result.css';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const Result = () => {
    const arr = (sessionStorage.getItem('answer')).split(",");
    let answers = '';
    for (let i = 0; i <arr.length; i++){
        answers += 'B'+(i+1)+'='+ arr[i]+' '
    }
	const name = sessionStorage.getItem('name');
	const gender = sessionStorage.getItem('gender');
	const [result, setResult] = useState([]);
	const [loading, setLoading] = useState(false);
	const [major, setMajor] = useState();
	const [job, setJob] = useState();
	const [data, setdata] = useState({
		labels: ['능력발휘', '보수', '사회적 인정', '사회봉사', '안정성', '자기계발', '자율성', '창의성'],
		datasets: [
			{
				label: '직업 별 가치관',
				backgroundColor: 'rgba(61, 137, 224,0.4)',
				hoverBackgroundColor: 'rgba(61, 137, 224,0.8)',
				data: [],
			},
		],
	});

	let history = useHistory();

	const questionInfo = {
		1: '능력발휘',
		2: '자율성',
		3: '보수',
		4: '안정성',
		5: '사회적 인정',
		6: '사회봉사',
		7: '자기계발',
		8: '창의성',
	};
	
	useEffect(() => {
		const params = {
            apikey: 'a1a6bd295f99062830aa64111bebad81',
            qestrnSeq: '6',
            targetSe: '100209',
            name: name,
            gender: gender,
            grade: '2',
            startDtm: new Date().getTime(),
            answers: answers
		};
		const fetch = async () => {
			const res = await axios.post(
				'https://www.career.go.kr/inspct/openapi/test/report?apikey=e772916f49d49980fd515f04c9ebc4ba&qestrnSeq=6',
				params
			);
			const seq = res.data.RESULT.url.split('seq=')[1];
			const res2 = await axios.get(
				'https://www.career.go.kr/inspct/api/psycho/report?seq=' + seq
			);
			const score = res2.data.result.wonScore.split(' ').filter((x) => x);
			const result = score.map((item) => {
				const split_data = item.split('=');
				return { num: split_data[0], value: parseInt(split_data[1]) };
			});

			await setdata(() => {
				let setdata = { ...data };
				setdata.datasets[0].data = result.map((item) => {
					return item.value;
				});
				return setdata;
			});

			result.sort((a, b) => {
				return b.value - a.value;
			});
			setResult(result);
			const [value1, value2] = [result[0].num, result[1].num];
			const job_res = await axios.get(
				`https://inspct.career.go.kr/inspct/api/psycho/value/jobs?no1=${value1}&no2=${value2}`,
			);
			const major_res = await axios.get(
				`https://inspct.career.go.kr/inspct/api/psycho/value/majors?no1=${value1}&no2=${value2}`,
			);
			setJob(() => {
				const temp = { 1: [], 2: [], 3: [], 4: [], 5: [] };
				job_res.data.forEach((a) => {
					temp[a[2]].push(a[1]);
				});
				return temp;
			});
			setMajor(() => {
				const temp = {
					0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [],
				};
				major_res.data.forEach((a) => {
					if (a[2] !== 0) {
						temp[0].push(a[1]);
					}
					temp[a[2]].push(a[1]);
				});
				return temp;
			});
			setLoading(true);
		};
		fetch();
	}, []);

	if (!loading) {
		return <span>결과를 불러오는 중 입니다.</span>;
	}

	
	return (
		<div className="doc">
		<div className="result-box">
			<h2 className="result-title">/ 직업가치관검사 결과 /</h2>
			<table className="user-table">
				<thead>
					<tr>
						<th>이름</th>
						<th>성별</th>
						<th>검사일</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{name}</td>
						<td>{gender === '남자' ? '남자' : '여자'}</td>
						<td>{new Date().toLocaleString('kor').slice(0, 14)}</td>
					</tr>
				</tbody>
			</table>
			<h2 className="sub-result-title"> 직업가치관 결과 </h2><br />
			<p style={{textAlign: "left", fontSize: "20px"}}>
				직업생활과 관련하여{' '} {name} 님은{' '} {questionInfo[result[0].num]}(와)과{' '}
				{questionInfo[result[1].num]}(을)를 가장 중요하게 생각합니다.
				<br /><br />
				반면에{' '}{questionInfo[result[result.length - 1].num]},{' '}{questionInfo[result[result.length - 2].num]}
				은 상대적으로 덜 중요하게 생각합니다.
			</p> <br /><br />
			<Bar data={data} width={'100px'} height={'50px'} />
			<br /><br /><br />
			<hr />
			<h2 className="sub-result-title">  나의 가치관과 관련이 높은 직업 </h2>
			<div style={{textAlign: "center"}}><h3 className="sub-sub-title"> / 종사자 평균 학력별 / </h3></div>
			<table className="result-table">
				<thead>
					<tr>
						<th>분야</th>
						<th>직업명</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th style={{ minWidth: '90px'}}>
							중졸이하
						</th>
						<td>{job[1].join(', ')}</td>
					</tr>
					<tr>
						<th>고졸</th>
						<td>{job[2].join(', ')}</td>
					</tr>
					<tr>
						<th>전문대졸</th>
						<td>{job[3].join(', ')}</td>
					</tr>
					<tr>
						<th>대졸</th>
						<td>{job[4].join(', ')}</td>
					</tr>
					<tr>
						<th>대학원졸</th>
						<td>{job[5].join(', ')}</td>
					</tr>
				</tbody>
			</table>
			<br /><br /><br />
			<hr />

			<div style={{textAlign: "center"}}><h3 className="sub-sub-title"> / 종사자 평균 전공별 / </h3></div>	
			<table className="result-table">
				<thead>
					<tr>
						<th className="table-th">분야</th>
						<th className="table-th">직업명</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th style={{ minWidth: '100px' }}>
							계열무관
						</th>
						<td>{major[0].join(', ')}</td>
					</tr>
					<tr>
						<th>인문</th>
						<td>{major[1].join(', ')}</td>
					</tr>
					<tr>
						<th>사회</th>
						<td>{major[2].join(', ')}</td>
					</tr>
					<tr>
						<th>교육</th>
						<td>{major[3].join(', ')}</td>
					</tr>
					<tr>
						<th>공학</th>
						<td>{major[4].join(', ')}</td>
					</tr>
					<tr>
						<th>자연</th>
						<td>{major[5].join(', ')}</td>
					</tr>
					<tr>
						<th>의학</th>
						<td>{major[6].join(', ')}</td>
					</tr>
					<tr>
						<th>예체능</th>
						<td>{major[7].join(', ')}</td>
					</tr>
				</tbody>
			</table>
			<p className="foot">
				<button
					type="button"
					className="result-btn"
					onClick={() => {
						sessionStorage.removeItem('name');
						sessionStorage.removeItem('gender');
						sessionStorage.removeItem('answer');
						history.push('/');
					}}>다시 검사
				</button>
			</p>
		</div>
		</div>
	);
};

export default Result;