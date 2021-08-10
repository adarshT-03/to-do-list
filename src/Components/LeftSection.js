import React from 'react'
import {Layout,Header,Sider,Content,Footer,Typography,Affix ,Input,Col} from 'antd';
import 'antd/dist/antd.css'
import '../App.css';



const LeftSection=()=>{
    return(
        <Layout className='main'>
       
       
          <Layout.Content className='left-sider'>
              <Typography.Paragraph className='title-div' >
                  Vue.js
              </Typography.Paragraph>
              <Typography.Paragraph  className='title-div-inner'>
                    Example<br/>
                    Source

              </Typography.Paragraph>
             
              <Col className='dotted-line'></Col>
              <Layout className='quote-div'>
              <Col className='quotes-box'>
              <Typography.Paragraph className='quotes-p' >
              Vue.js provides efficient MVVM data bindings with a simple and flexible API. 
              It uses plain JavaScript object models, 
              DOM-based templating and extendable directives and filters.
              </Typography.Paragraph>
           
              <p className='comment'>Vue.js</p>

              </Col>
              <Col className='dotted-line line2'></Col>
              </Layout>
              <Col className='ul-div'>
              <Typography.Paragraph className='ul-header'>
                  Official Resources
              </Typography.Paragraph>
              <ul>
                  <li>Documentation</li>
                  <li>API Reference</li>
                  <li>Examples</li>
                  <li>Vue.js on Github</li>
              </ul>
              <Col className='dotted-line '></Col>
              </Col>
              <Col className='ul-div ul-div2'>
              <Typography.Paragraph className='ul-header'>
                    Community
              </Typography.Paragraph>
              <ul>
                  <li>Twitter</li>
                  <li>Gitter Channel</li>
                  <li>Discussion on Github</li>
                  
              </ul>
              <Col className='dotted-line '></Col>
              </Col>
              <Typography.Paragraph className='footer1'>
              If you have other helpful links to share, or find any 
              of the links above no longer work, 
              please let us know.
              </Typography.Paragraph>

           
              
          </Layout.Content>
          <Layout.Content className='right-content'>
          <Typography.Paragraph className='todo-text'>
             todos
            </Typography.Paragraph>
              <Input className='input-box' placeholder='What need to be done?'
              
              />
              <Layout className='do-list'>

              </Layout>
              <footer className='footer-div'>
                  <span><strong>1</strong> item left</span>
                  <ul>
                      <li>All</li>
                      <li>Active</li>
                      <li>Completed</li>
                  </ul>
                <div>Clear Completed</div>

              </footer>
            
             
          </Layout.Content>
        
         
       
       
      </Layout>
    )
}
export default LeftSection