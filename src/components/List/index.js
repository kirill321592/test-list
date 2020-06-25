
import React from 'react';
import styled from 'styled-components';

 export default ({ virtual, itemHeight }) => (
     <StyledList style={virtual.style} className="characters-list">
         {virtual.items.map(({ id, name, image }) => (
             <li key={`item_${id}`} style={{ height: itemHeight }} className="characters-list__item">
                 <img src={image} className="characters-list__item__img" alt="" />
                 <div className="characters-list__item__name">
                     {name}
                 </div>
            </li>
        ))}
     </StyledList>
);

const StyledList = styled.ul`
    margin-top:20px;
    .characters-list__item{
        text-align:center;
        width:200px;
        margin:0 auto 20px;
        box-shadow: 0px 0px 0.1rem rgba(0,0,0,0.3), 0px 0.2rem 0.2rem rgba(0,0,0,0.3);
        &__name{
            margin-top:10px;
        }
    }    
`;
