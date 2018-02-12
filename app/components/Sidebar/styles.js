import styled from 'styled-components';

const SidebarPanel = styled.div`
  position: fixed;
  width: 100px;
  height: 100%;
  left: 0;
  background: #14141c;
  font-family: Lato;
  
  ul {
    list-style: none outside none;
    margin: 0;
    padding: 0;
    text-align: center;
    
    li {
      
      a {
        color: #6A7088;
        text-decoration: none;
        font-size: 14px;
        padding: 30px 0;
        display: block;
        
        &.active {
          color: white;
        }
      }
      
      span {
        display: block;
      }
      
      img {
        margin-bottom: 10px;
      }
    }
  }
  
`;

export { SidebarPanel };
