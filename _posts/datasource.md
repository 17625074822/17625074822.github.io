### 维修工单

维修项目

```
        const projectColumns = [
            {
                title: '序号',
                align: 'center',
                dataIndex: 'key',
                width: 100,
            },
            {
                title: '维修项目名称',
                align: 'center',
                dataIndex: 'projectName',
                width: 300
            },
            {
                title: '维修工段',
                align: 'center',
                dataIndex: 'workType',
                width: 100
            },
            {
                title: '工时费',
                align: 'center',
                dataIndex: 'selfFee',
                width: 100
            },
            {
                title: '维修类别',
                align: 'center',
                dataIndex: 'projectType',
                width: 200
            },
            {
                title: '备注',
                align: 'center',
                dataIndex: 'projectRemark',
                width: 550
            },
            {
                title: '操作',
                key: 'operation',
                align: 'center',
                fixed: 'right',
                width: 100,
                render: (text, record) =>
                    <div className={'action-btns'}>
                        {record.key === 0 &&
                        <a onClick={() => this.setState({
                            visible: true,
                            uuid:Math.ceil(Math.random()*100000)
                        })}>选择</a>}
                        {record.key !== 0 &&
                        <Popconfirm title="确定要删除吗?" onConfirm={() => this.handleDelete(record.key)} okText="确定"
                                    cancelText="取消">
                            <a href="/">删除</a>
                        </Popconfirm>}
                    </div>
            },
        ]
```

维修材料

```
       const columns2 = [
            {
                title: '序号',
                align: 'center',
                dataIndex: 'id'
            },
            {
                title: '材料名称',
                align: 'center',
                dataIndex: 'materialName'
            },
            {
                title: '单位',
                align: 'center',
                dataIndex: 'unit'
            },
            {
                title: '数量',
                align: 'center',
                dataIndex: 'number'
            },
            {
                title: '单价',
                align: 'center',
                dataIndex: 'price'
            },
            {
                title: '金额',
                align: 'center',
                dataIndex: 'amount'
            },
            {
                title: '维修类别',
                align: 'center',
                dataIndex: 'type'
            },
            {
                title: '库存状态',
                align: 'center',
                dataIndex: 'status',
            }
        ]
```

### 维修历史 

礼券

````
        const columns4 = [
            {
                title: '序号',
                dataIndex: 'id',
                align: 'center',
                width: 80,
            },
            {
                title: '礼券名称',
                dataIndex: 'vouchernName',
                align: 'center',
                width: 200,
            },
            {
                title: '礼券类别',
                dataIndex: 'vouchernType',
                align: 'center',
                width: 200,
            },

            {
                title: '礼券业务类型',
                dataIndex: 'workType',
                align: 'center',
                width: 140,
            },
            {
                title: '礼券财务类型',
                dataIndex: 'financeType',
                align: 'center',
                width: 140,
            },
            {
                title: '有效期',
                dataIndex: 'validity',
                align: 'center',
                width: 100,
            },
            {
                title: '单张收款金额',
                dataIndex: 'collectionAmount',
                align: 'center',
                width: 100,
            },
            {
                title: '单张礼券面额',
                dataIndex: 'collectionDenomination',
                align: 'center',
                width: 100,
            },
            {
                title: '单张折扣比例',
                dataIndex: 'voucherDiscount',
                align: 'center',
                width: 100,
            },
            {
                title: '单张最大抵扣金额',
                dataIndex: 'maxDiscountAmount',
                align: 'center',
                width: 160,
            },
            {
                title: '张数',
                dataIndex: 'number',
                align: 'center',
                width: 100,
            },
            {
                title: '使用规则',
                dataIndex: 'useRule',
                align: 'center',
                width: 160,
            },
            {
                title: '适用范围',
                dataIndex: 'useRange',
                align: 'center',
                width: 200,
            },
            {
                title: '适用业务',
                dataIndex: 'useWork',
                align: 'center',
                width: 200,
            },
            {
                title: 'Action',
                key: 'operation',
                fixed: 'right',
                width: 100,
                render: () => <div className='action-btns'><a>删除</a></div>,
            },
        ]
````

礼券

```
        const columns3 = [
            {
                title: '序号',
                dataIndex: 'id',
                align: 'center',
                width: 80,
            },
            {
                title: '礼券名称/活动主题',
                dataIndex: 'vouchernName',
                align: 'center',
                width: 200,
            },
            {
                title: '单位',
                dataIndex: 'unit',
                align: 'center',
                width: 100,
            },
            {
                title: '数量',
                dataIndex: 'number',
                align: 'center',
                width: 100,
            },
            {
                title: '单价',
                dataIndex: 'price',
                align: 'center',
                width: 140,
            },
            {
                title: '金额',
                dataIndex: 'amount',
                align: 'center',
                width: 140,
            },
            {
                title: '礼券编号',
                dataIndex: 'voucherNumber',
                align: 'center',
                width: 140,
            },
            {
                title: '礼券业务类型',
                dataIndex: 'workType',
                align: 'center',
                width: 140,
            },
            {
                title: '礼券财务类型',
                dataIndex: 'financeType',
                align: 'center',
                width: 140,
            },
            {
                title: '备注',
                dataIndex: 'remark',
                align: 'center',
                width: 300,
            },
            {
                title: 'Action',
                key: 'operation',
                fixed: 'right',
                width: 100,
                render: () => <div className='action-btns'><a>删除</a></div>,
            },
        ]

```

