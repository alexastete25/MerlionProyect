import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { connect } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';

import { IRootState } from 'app/shared/reducers';

import Graficos from '../../entities/sales/graficos/graficos';
export type IHomeProp = StateProps;
import Grid from '@material-ui/core/Grid'
export const Home = (props: IHomeProp) => {
  const { account } = props;

  return (
    <Grid container justify = "center">
    <Graficos></Graficos>
  </Grid>
    
    
//       <Col md="12">
// {/*         
//         <h2>
//           <Translate contentKey="home.title">Welcome, Java Hipster!</Translate>
//         </h2>
//         <p className="lead">
//           <Translate contentKey="home.subtitle">This is your homepage</Translate>
//         </p> */}
//         <Row>
//         <Col md="12">
//     
//     </Col>
//     </Row>
//         {account && account.login ? (
//           <div>
//             <Alert color="success">
//               <Translate contentKey="home.logged.message" interpolate={{ username: account.login }}>
//                 You are logged in as user {account.login}.
//               </Translate>
//             </Alert>
//           </div>
//         ) : (''
          
//         )}
//         {/* <p>
//           <Translate contentKey="home.question">If you have any question on JHipster:</Translate>
//         </p>

//         <ul>
//           <li>
//             <a href="https://www.jhipster.tech/" target="_blank" rel="noopener noreferrer">
//               <Translate contentKey="home.link.homepage">JHipster homepage</Translate>
//             </a>
//           </li>
//           <li>
//             <a href="http://stackoverflow.com/tags/jhipster/info" target="_blank" rel="noopener noreferrer">
//               <Translate contentKey="home.link.stackoverflow">JHipster on Stack Overflow</Translate>
//             </a>
//           </li>
//           <li>
//             <a href="https://github.com/jhipster/generator-jhipster/issues?state=open" target="_blank" rel="noopener noreferrer">
//               <Translate contentKey="home.link.bugtracker">JHipster bug tracker</Translate>
//             </a>
//           </li>
//           <li>
//             <a href="https://gitter.im/jhipster/generator-jhipster" target="_blank" rel="noopener noreferrer">
//               <Translate contentKey="home.link.chat">JHipster public chat room</Translate>
//             </a>
//           </li>
//           <li>
//             <a href="https://twitter.com/jhipster" target="_blank" rel="noopener noreferrer">
//               <Translate contentKey="home.link.follow">follow @jhipster on Twitter</Translate>
//             </a>
//           </li>
//         </ul>

//         <p>
//           <Translate contentKey="home.like">If you like JHipster, do not forget to give us a star on</Translate>{' '}
//           <a href="https://github.com/jhipster/generator-jhipster" target="_blank" rel="noopener noreferrer">
//             Github
//           </a>
//           !
//         </p> */}
//       </Col>
//       <Col md="3" className="pad">
//         <span className="hipster rounded" />
//       </Col>
//     </Row>
  );
};

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated,
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(Home);
