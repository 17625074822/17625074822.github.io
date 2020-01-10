# AntDesign 时间选择器初始化

1.  ### 引入 moment

   ```
   import moment from 'moment';
   ```

2. ### 获取后端数据初始化的时候需要把String转换为moment形式

   ```
   moment(String, 'YYYY-MM-DD HH:mm:ss'),
   moment('2019-10-10 11:20:40', 'YYYY-MM-DD HH:mm:ss'),
   ```

3. ### 在表单中初始化时间

   ```
   <FormItem label={"开单日期"}>
       {
           getFieldDecorator('makeAt', {
           initialValue: moment(),  			//这个方法可以获取当前时间
           rules: []
       })(
   <DatePicker
           format='YYYY-MM-DD HH:mm:ss'		//格式化时间
           disabled={true}/>
           )
       }
   </FormItem>
   ```

   