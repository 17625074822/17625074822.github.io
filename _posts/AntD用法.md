# AntD用法

### form表单的接受值的方法

```

render() 
{
		//声明getFieldDecorator
        const {getFieldDecorator} = this.props.form;  
 }
 
 <FormItem>
   {
       getFieldDecorator('userName', {
       initialValue: 'Jack',
       rules: []
       })(
       <Input placeholder={"请输入用户名"}/>
       )
   }
 </FormItem>	 
```



### form表单验证字段的方法

```
<FormItem>
        {
            getFieldDecorator('userName', {
            initialValue: '',		//初始化值
            rules: [					//验证规则
                    {
                    required: true,
                    message: '用户名不能为空'
                    }
                ]
            })(
            <Input placeholder={"请输入用户名"}/>
            )
        }
</FormItem>


<FormItem>
      <Button type={"primary"} 
      onClick={this.handleSubmit}>登录</Button> //设置方法
</FormItem>

//声明方法
handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                message.success(`${userInfo.userName}恭喜你,你通过本次表单组件学习,当前密码为：${userInfo.userPwd}`);
            }
        })
    }
```



### 验证规则

```
rules: [
                {
                required: true,
                message: '用户名不能为空'
                },
                {
                min: 5, max: 10,
                message: "长度不在范围内"
                },
                {
                // pattern:/^\w+$/g,
                pattern: new RegExp('^\\w+$', 'g'),
                message: "必须为字母和数字"
                }
        ]
```



### 给checkbox默认选中

```
   {
   getFieldDecorator('remember', {
   valuePropName: 'checked',
   initialValue: false,
   rules: []
   })(
   <Checkbox>记住密码</Checkbox>
   )
   }
   <a href="#" style={{float:'right'}}>忘记密码</a>
```



### 给表单添加图标

```
    <Input 
    prefix={<Icon type={"lock"}/>} 				//添加前缀图标
    type={"password"} 
    placeholder={"请输入密码"}/>
```

让label与input在同一水平位置

```
const formItemLayout = {
    labelCol: {
    sm:1
    },
    wrapperCol: {
    sm:2
    }
  }
```

```
 <FormItem label={"用户名"} {...formItemLayout}>
 </FormItem>
```



```
                <Card title={"维修工单"}>
                    <Form layout="inline">
                        <FormItem>
                            <span>送修人</span>
                            <Input placeholder={"请输入姓名"}/>
                        </FormItem>
                    </Form>
                </Card>
                <Card title={"水平登录表单"} style={{marginTop: 10}}>
                    <Form style={{width: 300}}>
                        <FormItem>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空'
                                        },
                                        {
                                            min: 5, max: 10,
                                            message: "长度不在范围内"
                                        },
                                        {
                                            // pattern:/^\w+$/g,
                                            pattern: new RegExp('^\\w+$', 'g'),
                                            message: "必须为字母和数字"
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type={"user"}/>} placeholder={"请输入用户名"}/>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('userPwd', {
                                    initialValue: '',
                                    rules: []
                                })(
                                    <Input prefix={<Icon type={"lock"}/>} type={"password"} placeholder={"请输入密码"}/>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: false,
                                    rules: []
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href="#" style={{float: 'right'}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type={"primary"} onClick={this.handleSubmit}>登录<                <Card title={"维修工单"}>
                    <Form layout="inline">
                        <FormItem>
                            <span>送修人</span>
                            <Input placeholder={"请输入姓名"}/>
                        </FormItem>
                    </Form>
                </Card>
                <Card title={"水平登录表单"} style={{marginTop: 10}}>
                    <Form style={{width: 300}}>
                        <FormItem>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空'
                                        },
                                        {
                                            min: 5, max: 10,
                                            message: "长度不在范围内"
                                        },
                                        {
                                            // pattern:/^\w+$/g,
                                            pattern: new RegExp('^\\w+$', 'g'),
                                            message: "必须为字母和数字"
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type={"user"}/>} placeholder={"请输入用户名"}/>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('userPwd', {
                                    initialValue: '',
                                    rules: []
                                })(
                                    <Input prefix={<Icon type={"lock"}/>} type={"password"} placeholder={"请输入密码"}/>
                                )
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: false,
                                    rules: []
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href="#" style={{float: 'right'}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type={"primary"} onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>/Button>
                        </FormItem>
                    </Form>
                </Card>
```

### 表格排序

```
handleChange = (pagination, filters, sorter) => {
    this.setState({
    sortOrder: sorter.order
    })
}

//datasource 
{
    title: '账龄',
    width: 80,
    dataIndex: 'feeAge',
    sorter: (a, b) => {
    return a.feeAge - b.feeAge
    },
    sortOrder: this.state.sortOrder,
},


//table
 <Table
     bordered
     rowKey={record => record.id}
     columns={columns}
     dataSource={this.state.dataSource}
     onChange={this.handleChange}
     scroll={{y: 340, x: 2174}}
     >
 </Table>
```

### 徽标

```
  {
          title: '是否提交',
          width: 120,
          fixed: "right",
          dataIndex: 'submit',
          render(submit) {
          let config = {
          '1': <Badge status="success" text="已提交"/>,
          '2': <Badge status="error" text="未提交"/>,
          }
          return config[submit];   //这边是数组  
          }
  }
```

### 添加操作按钮

```
  {
          title: '操作',
          align:'center',
          render: (text, record) => {
                  return <Row>
                  <Col span={8}>
                  <Button size={"small"} onClick={() => {this.handleHistory(record.id)}}>维修历史</Button>
                  </Col>
                  <Col span={8}>
                  <Button size={"small"} onClick={() => {this.handleEdit(record.id)}}>工单编辑</Button>
                  </Col>
                  <Col span={8}>
                  <Button size={"small"} onClick={() => {this.handleSettlement(record.id)}}>业务结算</Button>
                  </Col>
                  </Row>
                  }
  },
```

### 表格水平滚动条移动

```
<Table
    bordered
    rowKey={record => record.id}
    columns={columns}
    dataSource={this.state.dataSource}
    onChange={this.handleChange}
    scroll={{y: 340, x: 2174}}
    >
</Table>
```

### 表格两头固定

```
{
    title: '序号',
    width: 80,
    fixed: 'left',
    dataIndex: 'id'
},
```



### 在page页面声明form

```
class RepairForm extends React.Component {
    searchPlate = () => {
        console.log(123);//调用搜索方法
    }
    editUserName = () => {
        console.log(321);
    }
    editPhone = () => {
        console.log('hahaha');
    }
    editVIN = () => {
        console.log('hqweqweqweqw');
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {span: 8},
            wrapperCol: {span: 16}
        }
        const formItemTextAreaLayout = {
            labelCol: {span: 4},
            wrapperCol: {span: 20}
        }
        return (
            <Form>
                <Row>
                    <Col span={8}>
                        <Col span={12}>
                            <Row>
                                <FormItem label={"送修人"} {...formItemLayout}>
                                    {
                                        getFieldDecorator('userName', {
                                            initialValue: '',
                                            rules: []
                                        })(
                                            <Input
                                                suffix={<Icon type={"edit"} onClick={this.editUserName}/>}
                                            />
                                        )
                                    }
                                </FormItem>
                                <FormItem label={"电话"} {...formItemLayout}>
                                    {
                                        getFieldDecorator('phone', {
                                            initialValue: '',
                                            rules: []
                                        })(
                                            <Input
                                                suffix={<Icon type={"edit"} onClick={this.editPhone}/>}
                                            />
                                        )
                                    }
                                </FormItem>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row>
                                <FormItem label={"车牌号"} {...formItemLayout}>
                                    {
                                        getFieldDecorator('plate', {
                                            initialValue: '',
                                            rules: []
                                        })(
                                            <Input.Search
                                                onSearch={this.searchPlate}
                                            />
                                        )
                                    }
                                </FormItem>
                                <FormItem label={"进厂里程"} {...formItemLayout}>
                                    {
                                        getFieldDecorator('mileage', {
                                            initialValue: '',
                                            rules: []
                                        })(
                                            <Input/>
                                        )
                                    }
                                </FormItem>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <FormItem label={"车主名称"} {...formItemTextAreaLayout}>
                                {
                                    getFieldDecorator('masterName', {
                                        initialValue: '',
                                        rules: []
                                    })(
                                        <Input
                                            suffix={<Icon type={"edit"} onClick={this.editUserName}/>}
                                        />
                                    )
                                }
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <Row>
                                <FormItem label={"保险到期"} {...formItemLayout}>
                                    {
                                        getFieldDecorator('endTime', {
                                            initialValue: '',
                                            rules: []
                                        })(
                                            <Input

                                            />
                                        )
                                    }
                                </FormItem>
                                <FormItem label={"制单人"} {...formItemLayout}>
                                    {
                                        getFieldDecorator('createBy', {
                                            initialValue: '',
                                            rules: []
                                        })(
                                            <Input

                                            />
                                        )
                                    }
                                </FormItem>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row>
                                <FormItem label={"保险公司"} {...formItemLayout}>
                                    {
                                        getFieldDecorator('company', {
                                            initialValue: '',
                                            rules: []
                                        })(
                                            <Input.Search
                                            />
                                        )
                                    }
                                </FormItem>
                                <FormItem label={"服务顾问"} {...formItemLayout}>
                                    {
                                        getFieldDecorator('saler', {
                                            initialValue: '',
                                            rules: []
                                        })(
                                            <Input/>
                                        )
                                    }
                                </FormItem>
                            </Row>
                        </Col>

                    </Col>
                    <Col span={6}>
                        <FormItem label={"维修车型"} {...formItemLayout}>
                            <Input/>
                        </FormItem>
                        <FormItem label={"VIN号"} {...formItemLayout}>
                            <Input
                                suffix={<Icon type={"edit"} onClick={this.editVIN}/>}
                            />
                        </FormItem>
                        <FormItem label={"车主电话"} {...formItemLayout}>
                            <Input/>
                        </FormItem>
                        <FormItem label={"故障描述"} {...formItemLayout}>
                            <Input.TextArea
                                style={{resize: 'none'}}
                                autoSize={{minRows: 4, maxRows: 4}}
                            />
                        </FormItem>
                    </Col>
                    <Col span={10}>
                        <Col span={12}>
                            <Row>
                                <FormItem label={"开单日期"} {...formItemLayout}>
                                    {
                                        getFieldDecorator('createAt', {
                                            initialValue: '',
                                            rules: []
                                        })(
                                            <Input/>
                                        )
                                    }
                                </FormItem>
                                <FormItem label={"派工时间"} {...formItemLayout}>
                                    {
                                        getFieldDecorator('finishAt', {
                                            initialValue: '',
                                            rules: []
                                        })(
                                            <Input/>
                                        )
                                    }
                                </FormItem>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row>
                                <FormItem label={"派工时间"} {...formItemLayout}>
                                    {
                                        getFieldDecorator('workAt', {
                                            initialValue: '',
                                            rules: []
                                        })(
                                            <Input/>
                                        )
                                    }
                                </FormItem>
                                <FormItem label={"结算时间"} {...formItemLayout}>
                                    {
                                        getFieldDecorator('settleAt', {
                                            initialValue: '',
                                            rules: []
                                        })(
                                            <Input/>
                                        )
                                    }
                                </FormItem>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <FormItem label={"工单备注"} {...formItemTextAreaLayout}>
                                {
                                    getFieldDecorator('orderRemark', {
                                        initialValue: '',
                                        rules: []
                                    })(
                                        <Input.TextArea
                                            style={{resize: 'none'}}
                                            autoSize={{minRows: 1, maxRows: 1}}
                                        />
                                    )
                                }
                            </FormItem>
                        </Col>
                        <Col span={24}>
                            <FormItem label={"检验备注"} {...formItemTextAreaLayout}>
                                {
                                    getFieldDecorator('checkRemark', {
                                        initialValue: '',
                                        rules: []
                                    })(
                                        <Input.TextArea
                                            style={{resize: 'none'}}
                                            autoSize={{minRows: 4, maxRows: 4}}
                                        />
                                    )
                                }
                            </FormItem>
                        </Col>
                    </Col>
                </Row>
            </Form>
        );
    }
}

RepairForm = Form.create({})(RepairForm);
```



### 获取表单的值

```
const { getFieldDecorator } = this.props.form;

this.getFieldsValue = this.props.form.getFieldsValue;//获得表单所有控件的值

this.props.form.getFieldsValue（“name”）//获得指定控件的值

this.props.form.validateFields((err, values) => {})  //校验并获取一组输入域的值与 Error，若 fieldNames 参数为空，则校验全部组件

在ant design 2x 中

{getFieldDecorator('note', { rules: [{ required: true, message: 'Please input your note!' }], })( <Input />）

getFieldDecorator 用于和表单进行双向绑定，其中

经过 getFieldDecorator 包装的控件，表单控件会自动添加 value，数据同步将被 Form 接管
```



### 表格前头单选、多选框

```
const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
        console.log(selectedRowKeys, selectedRows)
        this.setState({
        selectedRowKeys: selectedRowKeys,
        selectedRows: selectedRows,
        })
    }
};


                     
<Table
    bordered
    rowSelection={rowSelection}
    rowKey={record => record.id}
    columns={columns}
    pagination={false}
    dataSource={this.state.dataSource}
    scroll={{x: 5000}}
 />
```



### Axios封装

```
import axios from 'axios'
import {Modal} from 'antd'

export default class Axios {
    static ajax(options) {
        let baseApi = 'http://rap2api.taobao.org/app/mock/239781'
        return new Promise(((resolve, reject) => {
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseApi,
                timeout: 5000,
                params: (options.data && options.data.params) || ''
            }).then((response) => {
                if (response.status == '200') {
                    let res = response.data
                    if (res.code == 'SUCCESS') {
                        resolve(res)
                    }
                    if (res.code == 'ERROR') {
                        Modal.info({
                            title: "提示",
                            content: res.message
                        })
                    }
                } else {
                    reject(response.data)
                }
            })
        }))

    }
}

```



### 分页封装

````
import Utils from '../../../utils/utils'

request //请求数据的方法
let _this = this;


  this.setState({
      dataSource: res.result.list,  //这是数据源
      pagination: Utils.pagination(res, (current) => {
      _this.params.page = current;
      this.request()
      })
  })
  
  
  
  utils文件夹
  pagination(data, callback) {
          let page = {
          onChange: (current) => {
          callback(current)
          },
          current: data.result.pagination.page,
          pageSize: data.result.pagination.limit,
          total: data.result.pagination.total,
          showTotal: () => {
          return `共${data.result.pagination.total}条`
          },
          showQuickJumper: true  //快速跳转
          }
          return page;
  },
````



### Mock数据

```

```



### Loading处理、错误拦截

```

```

