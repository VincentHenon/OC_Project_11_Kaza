import React from 'react'
import { useParams } from 'react-router-dom'
import housingData from '../assets/data/logements.json'
import Carousel from '../components/Carousel'
import Tag from '../components/Tag'
import DropMenu from '../components/DropMenu'
import Host from '../components/Host'
import Page404 from './Page404'

function Housing() {
    // extracting the id from the url
    const { id } = useParams()
    //console.log( { id })

    // find the matched object based on the id
    const thumbData = housingData.find(housing => housing.id === id)
    console.log(thumbData)
  
    // fallback where data is not loaded
    if (!thumbData) {
      //return <div className='dataError' >Oups! Nous n'arrivons pas à charger les données de la page!</div>
      return <Page404 />
    }

    return (
        <main>
            <div className="housingPageWrapper">
                <Carousel pictures= {thumbData.pictures}/>
                <div className="housingInfoWrapper">
                    <div className="infoWrapper">
                        <div className="locationWrapper">
                            <h1 className="infoTitle">{thumbData.title}</h1>
                            <p className="infoLocation">{thumbData.location}</p>
                            <div className="tagsWrapper">
                                { thumbData.tags.map(
                                    tag => // create a tag element for each object found in the json
                                        (<Tag key={tag} name={tag} />)
                                    )
                                }
                            </div>
                        </div>
                        <Host name= {thumbData.host.name} picture= {thumbData.host.picture} rating= {thumbData.rating} />
                    </div>
                    <div className="menuWrapper">
                        <DropMenu className= "menuDescription" key="desciption" title="Description" content={thumbData.description}/>
                        <DropMenu className= "menuEquipment" key="equipments" title="Équipements" content={thumbData.equipments.map((item, index)=><p key= {index}>{item}</p>)} 
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Housing