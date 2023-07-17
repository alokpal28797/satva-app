import { SearchOutlined } from '@ant-design/icons';
import { Col, Input, Row, Space, InputNumber, Select } from 'antd';
import { useState } from 'react';
// For search filter and paginate
const SearchAndFilter = (props: any) => {
    // Init
    const { performSearchHandler, searchValue, handlePageSizeChange } = props;

    const handleChange = (e: any) => {
        console.log(e);
        handlePageSizeChange(e)

    }

    // JSX
    return (
        <div className='searchFilter'>
            <div className='searchFilterWrapper'>
                <Row justify={'space-between'}>
                    <Col>
                        <InputNumber min={10} max={15} defaultValue={10} onChange={handleChange} />
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
                                defaultValue="filterOne"
                                style={{ width: 200 }}
                                options={[
                                    { label: 'Filter One', value: 'filterOne' },
                                    { label: 'Filter Second', value: 'filterSecond' },
                                    { label: 'Filter Third', value: 'filterThird' },
                                ]}
                            />
                        </Space>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default SearchAndFilter;
