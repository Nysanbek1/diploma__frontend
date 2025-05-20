import './app.css';
import logo from "../logo.svg"
import logo2 from "../logo.png"

import {useState, useEffect } from 'react';



function App() {
  const [user, setUser] = useState()
  const [login, setLogin] = useState()
  const [password, setPassword] = useState()
  const [email, setEmail] = useState()
  const [passwordTwe, setPasswordTwe] = useState()
  const [gender, setGender] = useState('')
  const [age, setAge] = useState()
  const [weight, setWeight] = useState()
  const [fatPercentage, setFatPercentage] = useState()
  const [height, setHeight] = useState()
  const [goal, setGoal] = useState({
    'Похудение': false,
    'Набор массы': false,
    'Поддержание формы': false,
    'Увеличение силы': false,
    'Улучшение выносливости': false,
    'Улучшение гибкости': false,
  })
  const [physicalTraining, setphysicalTraining] = useState()
  const [trainingConditions, setTrainingConditions] = useState({
    home: '',
    gym: '',
    street: ''
  })
  const [selected, setSelected] = useState({
    'Грыжи межпозвонковых дисков (шейный)': false,
    'Грыжи межпозвонковых дисков (грудной)': false,
    'Грыжи межпозвонковых дисков (поясничный отдел)': false,
    'Протрузии': false,
    'Сколиоз  (S-образный)': false,
    'Сколиоз  (C-образный)': false,
    'Сколиоз  (степень)': false,
    'Кифоз (усиленный)': false,
    'Кифоз (сглаженный)': false,
    'Спондилолистез': false,
    'Радикулит': false,
  });
  const [knees, setKnees] = useState({
    'Разрыв мениска': false,
    'Повреждение связок (ACL)': false,
    'Повреждение связок (PCL)': false,
    'Артроз коленного сустава': false,
    'Хондромаляция надколенника': false,
    'Пателлофеморальный болевой синдром': false,
  })

  const [shoulders, setShoulders] = useState({
    'Вывихи': false,
    'Разрыв вращательной манжеты плеча': false,
    'Импинджмент синдром': false,
    'Бурсит плечевого сустава': false,
  })

  const [elbowsHands, setElbowsHands] = useState({
    'Эпикондилит (теннисный локоть)': false,
    'Эпикондилит (локоть гольфиста)': false,
    'Синдром запястного канала': false,
    'Артрит': false,
  })
  const [ankleFeet, setAnkleFeet] = useState({
    'Плоскостопие (продольное)': false,
    'Плоскостопие (поперечное)': false,
    'Плоскостопие (степени)': false,
    'Подошвенный фасциит': false,
    'Ахиллобурсит': false,
    'Вальгусная деформация стопы (шишка)': false,
  })

  const [vascularHearts, setVascularHearts] = useState({
    'Гипертония (1 степень)': false,
    'Гипертония (2 степень)': false,
    'Гипертония (3 степень)': false,
    'Гипотония': false,
    'Аритмия (экстрасистолия)': false,
    'Аритмия (тахикардия )': false,
    'Варикозное расширение вен (таз)': false,
    'Варикозное расширение вен (нижние конечности)': false,
    'Хроническая венозная недостаточность': false,
    'Перенесённый инфаркт': false,
    'Перенесённый инсульт': false,
    'Стенокардия': false,
    'Миокардит': false,
    'Сердечная недостаточность': false,
    'Атеросклероз': false,
  })
  
  const [respiratory, setRespiratory] = useState({
    'Бронхиальная астма (лёгкая)': false,
    'Бронхиальная астма (тяжёлая форма)': false,
    'ХОБЛ': false,
    'Аллергические реакции на пыльцу': false,
    'холодный воздух': false,
    'Частая отдышка при минимальной нагрузке': false,
    'заложенность дыхательных путей': false,
  })
  
  const [endocrinology, setEndocrinology] = useState({
    'Диабет (1)': false,
    'Диабет (2)': false,
    'Метаболический синдром': false,
    'Инсулинорезистентность': false,
    'Гипотиреоз': false,
    'гипертиреоз': false,
    'Повышенный холестерин': false,
  })
  
  const [neurologyPsychology, setNeurologyPsychology] = useState({
    'Эпилепсия': false,
    'Панические атаки': false,
    'Тревожные расстройства': false,
    'ВСД (вегето-сосудистая дистония)': false,
    'Мигрени': false,
    'Бессонница': false,
    'Хроническая усталость': false,
    'Депрессия': false,
    'Восстановление после ЧМТ': false,
    'Нарушение координации / равновесия': false,
    'СДВГ': false,
    'Аутизм': false,
    'Задержка моторного развития': false,
  })

  const [allergy, setAllergy] = useState({
    'Арахис': false,
    'Миндаль': false,
    'Кешью': false,
    'Фундук': false,
    'Грецкий орех': false,
    'Бразильский орех': false,
    'Макадамия': false,
    'Фисташки': false,
    'Пекан': false,
    'Кедровые орешки': false,
    'Семена кунжута': false,
    'Семена подсолнечника': false,
    'Семена тыквы': false,
    'Чиа': false,
    'Семена льна': false,
  
    'Коровье молоко': false,
    'Козье молоко': false,
    'Овечье молоко': false,
    'Молочная сыворотка': false,
    'Сыры (зрелые)': false,
    'Сливки': false,
    'Йогурт': false,
  
    'Куриные яйца': false,
    'Перепелиные яйца': false,
    'Яичный белок': false,
    'Яичный желток': false,
  
    'Тунец': false,
    'Лосось': false,
    'Треска': false,
    'Сельдь': false,
    'Креветки': false,
    'Крабы': false,
    'Мидии': false,
    'Омары': false,
    'Устрицы': false,
    'Кальмары': false,
  
    'Пшеница': false,
    'Рожь': false,
    'Ячмень': false,
    'Овёс': false,
    'Кукуруза': false,
    'Соя': false,
    'Чечевица': false,
    'Нут': false,
    'Фасоль': false,
    'Горох': false,
    'Люпин': false,
    'Киноа': false,
  
    'Яблоки': false,
    'Персики': false,
    'Груши': false,
    'Сливы': false,
    'Вишня': false,
    'Абрикосы': false,
    'Клубника': false,
    'Малина': false,
    'Киви': false,
    'Авокадо': false,
    'Цитрусовые': false,
    'Ананас': false,
    'Арбуз': false,
    'Дыня': false,
    'Помидоры': false,
    'Морковь': false,
    'Сельдерей': false,
    'Картофель': false,
    'Чеснок': false,
    'Лук': false,
  
    'Шоколад / какао': false,
    'Кофеин': false,
    'Мёд': false,
    'Грибы': false,
    'Дрожжи': false,
    'Желатин': false,
    'Ванилин': false,
    'Глутамат натрия (E621)': false,
    'Сульфиты': false,
    'Бензоаты': false,
    'Аспартам': false,
  })

  const [userInfo, setUserInfo] = useState()

  const [status, setStatus] = useState()
  
 
  const toggleAllergy = (key) => {
    setAllergy(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  


  const toggleKneeOption = (key) => {
    setKnees((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleShoulder = (key) => {
    setShoulders((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleElbowsHands = (key) => {
    setElbowsHands(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleAnkleFeet = (key) => {
    setAnkleFeet(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  const toggleVascularHearts = (key) => {
    setVascularHearts(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  const toggleRespiratory = (key) => {
    setRespiratory(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  const toggleEndocrinology = (key) => {
    setEndocrinology(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  const toggleNeurologyPsychology = (key) => {
    setNeurologyPsychology(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  const [plan, setPlan] = useState()
  

  const otpravit = async () => {
    const token = localStorage.getItem('token');
  
    if (!token) {
      console.warn('Токен не найден. Войдите в аккаунт.');
      return;
    }
  
    const data = {
      gender,
      age,
      weight,
      fatPercentage,
      height,
      goal,
      physicalTraining,
      trainingConditions,
      selected,
      knees,
      shoulders,
      elbowsHands,
      ankleFeet,
      vascularHearts,
      respiratory,
      endocrinology,
      neurologyPsychology,
      allergy,
    };
  
    try {
      const res = await fetch('http://localhost:4000/user/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Добавляем токен в заголовок
        },
        body: JSON.stringify(data),
      });
  
      if (!res.ok) {
        throw new Error(`Ошибка: ${res.status}`);
      }
  
      const result = await res.json();
      //setPlan(result); // если приходит план, сохраняем
      console.log('Анкета отправлена и сохранена:', result);
      setUser(result)
    } catch (err) {
      console.error('Ошибка при отправке анкеты:', err);
    }
  };
  
  

  const registerUser = async () => {
    const data = {
      login,
      email,
      password,
      passwordTwe,
    };
  
    if (password !== passwordTwe) {
      console.error('Пароли не совпадают');
      return;
    }
  
    try {
      const res = await fetch('http://localhost:4000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),

      });
  
      const result = await res.json();
      console.log('Успешная регистрация:', result);
      setUser(result)
    } catch (err) {
      console.error('Ошибка при регистрации:', err);
    }
  };
  
  

  const loginUser = async () => {
    const data = {
      login,
      password,
    };
  
    try {
      const res = await fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const result = await res.json();
      console.log('Успешный вход:', result);
      console.log('Успешный вход:', result.user.login);
  
      setUser(result)
      
      localStorage.setItem('token', result.access_token);
      getUserData();
      loadHistory()
      
    } catch (err) {
      console.error('Ошибка при входе:', err);
    }
  };




  const getUserData = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;
  
    try {
      const res = await fetch('http://localhost:4000/user/data', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!res.ok) throw new Error('Не удалось получить анкету');
  
      const result = await res.json();
      console.log('Загруженная анкета:', result);
  
      setGender(result.gender);
      setAge(result.age);
      setWeight(result.weight);
      setHeight(result.height);
      setFatPercentage(result.fatPercentage);
      setGoal(result.goal);
      setphysicalTraining(result.physicalTraining);
      setTrainingConditions(result.trainingConditions);
      setSelected(result.selected);
      setKnees(result.knees);
      setShoulders(result.shoulders);
      setElbowsHands(result.elbowsHands);
      setAnkleFeet(result.ankleFeet);
      setVascularHearts(result.vascularHearts);
      setRespiratory(result.respiratory);
      setEndocrinology(result.endocrinology);
      setNeurologyPsychology(result.neurologyPsychology);
      setAllergy(result.allergy);
      setUserInfo(true)
    } catch (err) {
      console.error('Ошибка при загрузке анкеты:', err);
    }
  };
  

  

  const newPlan = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;
  
    try {
      const res = await fetch('http://localhost:4000/plan/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          gender, age, weight, height, fatPercentage,
          goal, physicalTraining, trainingConditions,
          selected, knees, shoulders, elbowsHands,
          ankleFeet, vascularHearts, respiratory,
          endocrinology, neurologyPsychology, allergy
        }),
      });
  
      const result = await res.json();
      console.log(result)
      setPlan(result)
    } catch (err) {
      console.error('Ошибка при генерации плана:', err);
    }
  };


  const [history, setHistory] = useState([]);

const loadHistory = async () => {
  const token = localStorage.getItem('token');
  if (!token) return;

  try {
    const res = await fetch('http://localhost:4000/plan/history', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const result = await res.json();
    setHistory(result.plans);
  } catch (err) {
    console.error('Ошибка при загрузке истории планов:', err);
  }
};

  return (
    <div className="App">
      <div className="shapka">
        {user ? (
          <div className="box_login">
            <button onClick={() => {
              setStatus('выход')
            }}>выход</button>
            <p className="greeting">👋 Привет, {user.user?.login || 'пользователь'}</p>
          </div>
        ) : (
          <div className="box_login">
            <div className="auth-buttons">
              <button onClick={() => {
                setStatus('вход')
              }}>вход</button>
              <button onClick={() => {
                setStatus('регистрация')
              }}>регистрация</button>
            </div>
          </div>
        )}
      </div>


      
      
      <div className='vhod_form'>
        <img className='logo' src={logo2} alt="logo" />
        <h2>Вход</h2>
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Электронная почта"
            className="styled-input"
          />
          <input type="password" 
          placeholder="пароль"
          value={password} onChange={(e) => {
            setPassword(e.target.value)
          }}/>
        
        <button onClick={loginUser}>вход</button>
      </div>


      <div className='registr_form'>
        <img className='logo' src={logo2} alt="logo" />
        <h2>Регистрация</h2>
        <div className='input__box'>
          <input type="text"  value={login}
          placeholder="логин"
           onChange={(e) => {
            setLogin(e.target.value)
          }} />
          <input type="text"  value={email}
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value)
          }}/>
          <input type="password"
          placeholder="пароль"
          value={password} onChange={(e) => {
            setPassword(e.target.value)
          }}/>
          <input type="password" 
          placeholder="повторите пароль"
          value={passwordTwe} onChange={(e) => {
            setPasswordTwe(e.target.value)
          }}/>
          {password !== passwordTwe ? <p className='p_password'>неправильный пароль</p> : null}
        </div>
        
        <button onClick={registerUser}>регистрация</button>
      </div>

      <div className='bolezn'>
        
        <div>
          <h3 className='H3_info_user'>ваш пол</h3>
          <p className='p_variant'
          style={{
            background: gender === 'мужской' ? 'linear-gradient(135deg, #00c9ff, #0076ff)' : '',
            color: gender === 'мужской' ? 'white' : ''
          }}
          onClick={() => {
            setGender('мужской')
          }}>мужской</p>
          <p className='p_variant' 
          style={{
            background: gender === 'женский' ? 'linear-gradient(135deg, #00c9ff, #0076ff)' : '',
            color: gender === 'женский' ? 'white' : ''
          }}
          onClick={() => {
            setGender('женский')
          }}>женский</p>
        </div>
        
        <div>
          <h3 className='H3_info_user'>ваш возраст</h3>
          <input 
          className='int_info'
           type="number" 
          value={age}
          onChange={(e) => setAge(e.target.value)}/>
        </div>
        <div>
          <h3 className='H3_info_user'>ваш вес</h3>
          <input 
          className='int_info' 
          type="number" 
          value={weight}
          onChange={(e) => setWeight(e.target.value)}/>
        </div>
        <div>
          <h3 className='H3_info_user'>ваш рост</h3>
          <input className='int_info' type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)} />
        </div>
        <div>
          <h3 className='H3_info_user'>ваш приверный процент жира</h3>
          <input className='int_info' type="number" 
          value={fatPercentage}
          onChange={(e) => setFatPercentage(e.target.value)}/>
        </div>
        <div>
          <h3 className='H3_info_user'>Цель (выбор одной или нескольких):</h3>
          {Object.entries(goal).map(([key, value]) => {
            const isConflict =
              (key === 'Похудение' && goal['Набор массы']) ||
              (key === 'Набор массы' && goal['Похудение']);

            return (
              <p
                key={key}
                className="p_variant"
                style={{
                  background: value ? 'linear-gradient(135deg, #00c9ff, #0076ff)' : '',
                  color: value ? 'white' : '',
                  cursor: 'pointer',
                  opacity: isConflict ? 0.5 : 1,
                  pointerEvents: isConflict ? 'none' : 'auto',
                }}
                onClick={() => {
                  setGoal((prev) => ({
                    ...prev,
                    [key]: !prev[key],
                  }));
                }}
              >
                {key}
              </p>
            );
          })}
        </div>
        <div>
          <h3 className='H3_info_user'>ваш уровень физической подготовки</h3>
          <p className='p_variant'
          style={{
            background: physicalTraining === 'Новичок (меньше 3 месяцев занятий)' ? 'linear-gradient(135deg, #00c9ff, #0076ff)' : '',
            color: physicalTraining === 'Новичок (меньше 3 месяцев занятий)' ? 'white' : ''
          }}
          onClick={() => {
            setphysicalTraining('Новичок (меньше 3 месяцев занятий)')
          }}>Новичок (меньше 3 месяцев занятий)</p>
          <p className='p_variant'
          style={{
            background: physicalTraining === 'Средний (от 3 месяцев до 1 год)' ? 'linear-gradient(135deg, #00c9ff, #0076ff)' : '',
            color: physicalTraining === 'Средний (от 3 месяцев до 1 год)' ? 'white' : ''
          }}
          onClick={() => {
            setphysicalTraining('Средний (от 3 месяцев до 1 год)')
          }}>Средний (от 3 месяцев до 1 год)</p>
          <p className='p_variant'
          style={{
            background: physicalTraining === 'Продвинутый (более 2 лет регулярных тренировок)' ? 'linear-gradient(135deg, #00c9ff, #0076ff)' : '',
            color: physicalTraining === 'Продвинутый (более 2 лет регулярных тренировок)' ? 'white' : ''
          }}
          onClick={() => {
            setphysicalTraining('Продвинутый (более 2 лет регулярных тренировок)')
          }}>Продвинутый (более 2 лет регулярных тренировок)</p>
        </div>
        <div>
          <h3 className='H3_info_user'>ваши условия тренировок</h3>
          <p
            className="p_variant"
            style={{
              background: trainingConditions.home ? 'linear-gradient(135deg, #00c9ff, #0076ff)' : '',
              color: trainingConditions.home ? 'white' : '',
            }}
            onClick={() => {
              setTrainingConditions((prev) => ({
                ...prev,
                home: !prev.home,
              }));
            }}
          >
            дома
          </p>

          <p
            className="p_variant"
            style={{
              background: trainingConditions.gym ? 'linear-gradient(135deg, #00c9ff, #0076ff)' : '',
              color: trainingConditions.gym ? 'white' : '',
            }}
            onClick={() => {
              setTrainingConditions((prev) => ({
                ...prev,
                gym: !prev.gym,
              }));
            }}
          >
            в зале
          </p>

          <p
            className="p_variant"
            style={{
              background: trainingConditions.street ? 'linear-gradient(135deg, #00c9ff, #0076ff)' : '',
              color: trainingConditions.street ? 'white' : '',
            }}
            onClick={() => {
              setTrainingConditions((prev) => ({
                ...prev,
                street: !prev.street,
              }));
            }}
          >
            на улице
          </p>
        </div>
        <h2>ВОЗМОЖНЫЕ ОГРАНИЧЕНИЯ И СОСТОЯНИЙ</h2>
        <h3 className='H3_info_user'>Ортопедические проблемы и травмы опорно-двигательного аппарата</h3>
        <div>
          <h3 className='H3_info_user'>Позвоночник:</h3>
          {Object.entries(selected).map(([key, value]) => (
            <p
              key={key}
              className="p_variant"
              style={{
                background: value ? 'linear-gradient(135deg, #00c9ff, #0076ff)' : '',
                color: value ? 'white' : '',
                cursor: 'pointer',
              }}
              onClick={() => {
                setSelected((prev) => ({
                  ...prev,
                  [key]: !prev[key],
                }));
              }}
            >
              {key}
            </p>
          ))}
        </div>
        <div>
          <h3 className='H3_info_user'>Колени:</h3>
          {Object.entries(knees).map(([key, value]) => (
            <p
              key={key}
              className="p_variant"
              style={{
                background: value ? 'linear-gradient(135deg, #00c9ff, #0076ff)' : '',
                color: value ? 'white' : '',
                cursor: 'pointer',
              }}
              onClick={() => toggleKneeOption(key)}
            >
              {key}
            </p>
          ))}
        </div>
        <div>
          <h3 className='H3_info_user'>Плечи:</h3>
          {Object.entries(shoulders).map(([key, value]) => (
            <p
              key={key}
              className="p_variant"
              style={{
                background: value ? 'linear-gradient(135deg, #00c9ff, #0076ff)' : '',
                color: value ? 'white' : '',
                cursor: 'pointer',
              }}
              onClick={() => toggleShoulder(key)}
            >
              {key}
            </p>
          ))}
        </div>
        <div>
          <h3 className='H3_info_user'>Локти и кисти:</h3>
          {Object.entries(elbowsHands).map(([key, value]) => (
            <p
              key={key}
              className="p_variant"
              style={{
                background: value ? 'linear-gradient(135deg, #00c9ff, #0076ff)' : '',
                color: value ? 'white' : '',
                cursor: 'pointer',
              }}
              onClick={() => toggleElbowsHands(key)}
            >
              {key}
            </p>
          ))}
        </div>
        <div>
          <h3 className='H3_info_user'>Голеностоп и стопы:</h3>
          {Object.entries(ankleFeet).map(([key, value]) => (
            <p
              key={key}
              className="p_variant"
              style={{
                background: value ? 'linear-gradient(135deg, #00c9ff, #0076ff)' : '',
                color: value ? 'white' : '',
                cursor: 'pointer',
              }}
              onClick={() => toggleAnkleFeet(key)}
            >
              {key}
            </p>
          ))}
        </div>
        <div>
          <h3 className='H3_info_user'>Заболевания сердца и сосудов:</h3>
          {Object.entries(vascularHearts).map(([key, value]) => (
            <p
              key={key}
              className="p_variant"
              style={{
                background: value ? 'linear-gradient(135deg, #00c9ff, #0076ff)' : '',
                color: value ? 'white' : '',
                cursor: 'pointer',
              }}
              onClick={() => toggleVascularHearts(key)}
            >
              {key}
            </p>
          ))}
        </div>
        <div>
          <h3 className='H3_info_user'>Дыхательная система</h3>
          {Object.entries(respiratory).map(([key, value]) => (
            <p
              key={key}
              className="p_variant"
              style={{
                background: value ? 'linear-gradient(135deg, #00c9ff, #0076ff)' : '',
                color: value ? 'white' : '',
                cursor: 'pointer',
              }}
              onClick={() => toggleRespiratory(key)}
            >
              {key}
            </p>
          ))}
        </div>
        <div>
          <h3 className='H3_info_user'>Эндокринология / гормоны / обмен веществ</h3>
          {Object.entries(endocrinology).map(([key, value]) => (
            <p
              key={key}
              className="p_variant"
              style={{
                background: value ? 'linear-gradient(135deg, #00c9ff, #0076ff)' : '',
                color: value ? 'white' : '',
                cursor: 'pointer',
              }}
              onClick={() => toggleEndocrinology(key)}
            >
              {key}
            </p>
          ))}        
        </div>
        <div>
          <h3 className='H3_info_user'>Неврология и психика</h3>
          {Object.entries(neurologyPsychology).map(([key, value]) => (
            <p
              key={key}
              className="p_variant"
              style={{
                background: value ? 'linear-gradient(135deg, #00c9ff, #0076ff)' : '',
                color: value ? 'white' : '',
                cursor: 'pointer',
              }}
              onClick={() => toggleNeurologyPsychology(key)}
            >
              {key}
            </p>
          ))}
        </div>
        <div>
          <h3 className='H3_info_user'>Аллергия или непереносимость </h3>
          {Object.entries(allergy).map(([key, value]) => (
            <p
              key={key}
              className="p_variant"
              style={{
                background: value ? 'linear-gradient(135deg, #00c9ff, #0076ff)' : '',
                color: value ? 'white' : '',
                cursor: 'pointer',
              }}
              onClick={() => toggleAllergy(key)}
            >
              {key}
            </p>
          ))}
        </div>
        
        <button className='button__otpravit' onClick={otpravit}>{userInfo ? 'редоактировать' : 'отправить'}</button>
        <button className='button__otpravit' onClick={newPlan}>составить план</button>
      </div>
        {plan?.result?.data ? (
          <div className="rezult__plan">
            {Object.entries(plan.result.data).map(([day, details]) => (
              <div key={day} className="day-box">
                <h2>{day}</h2>

                <div className="osnov__box">
                  <div className="box">
                    <div className="h__box">
                      <h3>🏋️‍♂️ Тренировка</h3>
                    </div>
                    <div className="list__box">
                      <ul>
                        {Array.isArray(details?.Тренировка) ? (
                          details.Тренировка.map((exercise, i) => (
                            <li key={i}>{exercise}</li>
                          ))
                        ) : (
                          <li>Нет данных по тренировке</li>
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="box">
                    <div className="h__box">
                      <h3>🍽 Питание</h3>
                    </div>
                    <div className="list__box">
                      <ul>
                        {details?.Питание ? (
                          Object.entries(details.Питание).map(([meal, content], i) => (
                            <li key={i}>
                              <strong>{meal}:</strong> {content}
                            </li>
                          ))
                        ) : (
                          <li>Нет данных по питанию</li>
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="box">
                    <div className="h__box">
                      <h3>💬 Комментарий</h3>
                    </div>
                    <div className="list__box">
                      <p>{details?.Комментарии || 'Комментариев нет'}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : null}



      <div className="rezult__plan">
        <h2 className='h__glav'>Прошлые планы</h2>
        {history.map((plan, index) => (
          <div key={index} className="day-box">
            <h2>План #{plan.id}</h2>
            {plan.data && Object.entries(plan.data).map(([day, details]) => (
              <div key={day}>
                <h2>{day}</h2>
                <div className="osnov__box">
                  <div className="box">
                    <div className="h__box">
                      <h3>🏋️‍♂️ Тренировка</h3>
                    </div>
                    <div className="list__box">
                      <ul>
                        {Array.isArray(details?.Тренировка) && details.Тренировка.length > 0 ? (
                          details.Тренировка.map((ex, i) => <li key={i}>{ex}</li>)
                        ) : (
                          <li>Нет данных по тренировке</li>
                        )}
                      </ul>
                    </div>
                  </div>
                  <div className="box">
                    <div className="h__box">
                      <h3>🍽 Питание</h3>
                    </div>
                    <div className="list__box">
                      <ul>
                        {details?.Питание ? (
                          Object.entries(details.Питание).map(([meal, content], i) => (
                            <li key={i}><strong>{meal}:</strong> {content}</li>
                          ))
                        ) : (
                          <li>Нет данных по питанию</li>
                        )}
                      </ul>
                    </div>
                  </div>
                  <div className="box">
                    <div className="h__box">
                      <h3>💬 Комментарий</h3>
                    </div>
                    <div className="list__box">
                      <p>{details?.Комментарии || 'Комментариев нет'}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
