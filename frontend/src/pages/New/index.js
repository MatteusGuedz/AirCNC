import React, { useState, useMemo} from 'react'
import api from '../../services/api'
import './styles.css'
import camera from '../../assets/camera.svg'

export default function New({history }) {
  const [company, setCompany] = useState('')
  const [techs, setTechs] = useState('')
  const [price, setPrice] = useState('')
  const [thumbnail, setThumbnail] = useState('')

  const preview = useMemo(()=>{
    return thumbnail ? URL.createObjectURL(thumbnail) : null
  }, [thumbnail])

  async function handleSubmit(event){
    event.preventDefault()
   const data = new FormData();
    const user_id = localStorage.getItem('user')

   data.append('thumbnail', thumbnail)
   data.append('company', company)
   data.append('techs', techs)
   data.append('price', price)
   
   await api.post('/spots', data, {
      headers:{user_id}
    })
    history.push('/dashboard')

  }

  function handleCompanyChange(event){
    setCompany(event.target.value)
  }
  function handleTechsChange(event){
    setTechs(event.target.value)
  }

  function handlePriceChange(event){
    setPrice(event.target.value)
  }

  function handleImageUpChange(event){
    setThumbnail(event.target.files[0])
  }
  return (
   <form onSubmit={handleSubmit} >
     <label 
     id="thumbnail" 
     style={{backgroundImage: `url(${preview})`}}
     className={thumbnail ? 'has-thumbnail': ''}
     >
      <input 
      type="file"
      onChange={handleImageUpChange}/>
      <img src={camera} alt="Select img"/>

     </label>

      <label htmlFor="company">EMPRESA *</label>
      <input 
      id="company"
      placeholder="Sua empresa Incrivel"
      value={company}
      onChange={handleCompanyChange}
      />

<label htmlFor="techs">TECNOLOGIAS * <span>(separadas por vírgula)</span></label>
      <input 
      id="techs"
      placeholder="Quais tecnologias usam?"
      value={techs}
      onChange={handleTechsChange}
      />

<label htmlFor="price">VALOR DA DIÁRIA *<span>(em branco para GRATUITO)</span></label>
      <input 
      id="price"
      placeholder="Valor cobrado por dia?"
      value={price}
      onChange={handlePriceChange}
      />
      <button type="submit" className="btn">Cadastrar</button>
   </form>
  );
}
