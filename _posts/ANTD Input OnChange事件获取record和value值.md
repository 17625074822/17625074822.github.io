# ANTD Input OnChange事件获取record和value值

```
    //获取工时费
    onChange = (event, record) => {
        record.projectFee = event.target.value
        console.log(this.state.ProjectDataSource)
    };
```

```
{
    title: '工时费',
    align: 'center',
    dataIndex: 'selfFee',
    width: 100,
    render: (text, record, index) =>
    <Input onChange={event => {
    this.onChange(event, record)
    }}/>
},
```



# Select OnChange事件获取record和value值

```
            {
                title: '维修工段',
                align: 'center',
                dataIndex: 'workType',
                width: 200,
                render: (text, record, index) =>
                    <Select style={{width: 100}} defaultValue={0} onChange={this.handleSelectSection}>
                        <Option value={1} record={record}>机电</Option>
                        <Option value={2} record={record}>钣金</Option>
                        <Option value={0} record={record}>请选择</Option>
                    </Select>
            },
```

```
    //选取维修工段
    handleSelectSection = (value, option) => {
        option.props.record.projectSection = value
    }
```

