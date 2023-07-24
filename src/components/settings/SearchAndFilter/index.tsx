import { SearchOutlined } from '@ant-design/icons'
import { Col, Input, Row, Space, InputNumber, Select } from 'antd'
import { useState } from 'react'
import './index.css'
// For search filter and paginate
const SearchAndFilter = (props: any) => {
   // Init
   const {
      performSearchHandler,
      searchValue,
      handlePageSizeChange,
      title,
      handleFilter,
   } = props

   const handleChange = (e: any) => {
      if (e === null) {
         e = 10
         handlePageSizeChange(e)
      } else {
         handlePageSizeChange(e)
      }
   }
   const handleSelectChange = (e: any) => {
      handleFilter(e)
   }

   // JSX
   return (
      <div className="searchFilter mt-2">
         <div className="searchFilterWrapper">
            {title === 'users' ? (
               <Row justify={'space-between'}>
                  <Col>
                     <InputNumber
                        min={10}
                        max={15}
                        defaultValue={10}
                        onChange={handleChange}
                     />
                  </Col>
                  <Col>
                     <Space>
                        <Input
                           placeholder="Search user"
                           suffix={<SearchOutlined />}
                           onChange={performSearchHandler}
                           value={searchValue}
                        />
                        <Select
                           defaultValue="Status"
                           style={{ width: 200 }}
                           options={[
                              { label: 'Enable', value: 'Enable' },
                              { label: 'Disable', value: 'Disable' },
                           ]}
                           onChange={handleSelectChange}
                        />
                     </Space>
                  </Col>
               </Row>
            ) : (
               <Row justify={'space-between'}>
                  <Col>
                     <Space>
                        <Input
                           placeholder={`Search ${title}`}
                           suffix={<SearchOutlined />}
                           onChange={performSearchHandler}
                           value={searchValue}
                        />
                     </Space>
                  </Col>
               </Row>
            )}
         </div>
      </div>
   )
}

export default SearchAndFilter
