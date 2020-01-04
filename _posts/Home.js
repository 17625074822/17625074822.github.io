import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom"

import Lead from "./pages/crm/lead";
import Task from "./pages/crm/task";
import importTask from "./pages/crm/task/import";
import maintainTask from "./pages/crm/task/maintain";
import noteCreate from "./pages/crm/note/create";

import Repair from "./pages/support/repair";
import Appointment from "./pages/support/appointment";
import Compensate from "./pages/support/compensate";
import Insourcing from "./pages/support/insourcing";
import InsourcingList from "./pages/support/entrusted";
import Outsourcing from "./pages/support/outsourcing";
import RepairList from "./pages/support/repairList";
import Settlement from "./pages/support/settlement";
import WorkTime from "./pages/support/workTime";
import ChooseCustomer from "./pages/support/chooseCustomer";

import Order from "./pages/sale/order"
import Plus from "./pages/sale/plus"
import Trial from "./pages/sale/trial"
import SkuArticle from "./pages/sale/skuArticle"
import SkuCar from "./pages/sale/skuCar"
import Articles from "./pages/sale/plus/articles";
import Discount from "./pages/sale/plus/discount";
import Examine from "./pages/sale/plus/examine";

import Demo from "./Demo";
import PlanList from "./pages/coupon/planList";
import CreatePlan from "./pages/coupon/createPlan";
import InfoModel from "./pages/coupon/infoModel";
import CreateTicket from "./pages/coupon/createTicket";
import SalePlan from "./pages/coupon/salePlan";
import OrderList from "./pages/coupon/orderList";
import SendConfirm from "./pages/coupon/sendConfirm";

import Category from "./pages/wms/category";
import CategoryCreate from "./pages/wms/category/create";
import Brand from "./pages/wms/brand";
import BrandCreate from "./pages/wms/brand/create";
import Warehouse from "./pages/wms/warehouse";
import WarehouseCreate from "./pages/wms/warehouse/create";
import Product from "./pages/wms/product";
import ProductCreate from "./pages/wms/product/create";
import CarReceipt from "./pages/wms/receipt/car";
import CarReceiptCreate from "./pages/wms/receipt/car/create";
import CarReceiptList from "./pages/wms/receipt/car/list";
import CarDelivery from "./pages/wms/delivery/car";
import CarSku from "./pages/wms/sku/car";
import CarSkuList from "./pages/wms/sku/car/list";
import CarSkuDiscount from "./pages/wms/sku/car/discount";
import CarSkuLock from "./pages/wms/sku/car/lock";
import CarSkuAdjust from "./pages/wms/sku/car/adjust";
import CarOrder from "./pages/wms/order/car";
import CarOrderMatch from "./pages/wms/order/car/match";
import PartReceipt from "./pages/wms/receipt/part";
import PartReceiptCreate from "./pages/wms/receipt/part/create";
import PartReceiptDetail from "./pages/wms/receipt/part/detail";
import PartReceiptList from "./pages/wms/receipt/part/list";
import PartDelivery from "./pages/wms/delivery/part";
import PartSku from "./pages/wms/sku/part";
import PartSkuInfo from "./pages/wms/sku/part/info";
import PartOrder from "./pages/wms/order/part";
import PartOrderDefence from "./pages/wms/order/part/defence";
import ArticleSku from "./pages/wms/sku/article";
import ArticleSkuPackage from "./pages/wms/sku/article/package";

import Receviable from './pages/finance/receivable';
import Prereclist from './pages/finance/prereclist';
import Prereclock from './pages/finance/prereclock';
import Prerecreq from './pages/finance/prerecreq';
import Prerec from './pages/finance/prerec';
import Preback from './pages/finance/preback';
import Prebackreq from './pages/finance/prebackreq';
import Prebalance from './pages/finance/prebalance';


function Welcome() {
    return (
        <div>
            <Demo></Demo>
        </div>
    )
}

class Home extends Component {
    render() {
        return (
            <div className={'Home'}>
                <Switch>
                    <Route exact path={'/'} component={Welcome}></Route>

                    <Route exact path={'/crm/lead'} component={Lead}></Route>
                    <Route exact path={'/crm/task'} component={Task}></Route>
                    <Route exact path={'/crm/task/import'} component={importTask}></Route>
                    <Route exact path={'/crm/task/maintain'} component={maintainTask}></Route>
                    <Route exact path={'/crm/note/create'} component={noteCreate}></Route>

                    <Route path={'/support/repair'} component={Repair}></Route>
                    <Route path={'/support/appointment'} component={Appointment}></Route>
                    <Route path={'/support/compensate'} component={Compensate}></Route>
                    <Route path={'/support/insourcing'} component={Insourcing}></Route>
                    <Route path={'/support/insourcingList'} component={InsourcingList}></Route>
                    <Route path={'/support/outsourcing'} component={Outsourcing}></Route>
                    <Route path={'/support/repairList'} component={RepairList}></Route>
                    <Route path={'/support/settlement'} component={Settlement}></Route>
                    <Route path={'/support/workTime'} component={WorkTime}></Route>
                    <Route path={'/support/chooseCustomer'} component={ChooseCustomer}></Route>

                    <Route exact path={'/sale/order'} component={Order}></Route>
                    <Route exact path={'/sale/plus'} component={Plus}></Route>
                    <Route exact path={'/sale/plus/articles'} component={Articles}></Route>
                    <Route exact path={'/sale/plus/discount'} component={Discount}></Route>
                    <Route exact path={'/sale/plus/examine'} component={Examine}></Route>
                    <Route exact path={'/sale/trial'} component={Trial}></Route>
                    <Route exact path={'/sale/skuArticle'} component={SkuArticle}></Route>
                    <Route exact path={'/sale/skuCar'} component={SkuCar}></Route>

                    <Route path={'/coupon/planList'} component={PlanList}></Route>
                    <Route path={'/coupon/createPlan'} component={CreatePlan}></Route>
                    <Route path={'/coupon/infoModel'} component={InfoModel}></Route>
                    <Route path={'/coupon/createTicket'} component={CreateTicket}></Route>
                    <Route path={'/coupon/salePlan'} component={SalePlan}></Route>
                    <Route path={'/coupon/orderList'} component={OrderList}></Route>
                    <Route path={'/coupon/sendConfirm'} component={SendConfirm}></Route>

                    <Route exact path={'/wms/category'} component={Category}></Route>
                    <Route exact path={'/wms/category/create'} component={CategoryCreate}></Route>
                    <Route exact path={'/wms/brand'} component={Brand}></Route>
                    <Route exact path={'/wms/brand/create'} component={BrandCreate}></Route>
                    <Route exact path={'/wms/warehouse/create'} component={WarehouseCreate}></Route>
                    <Route exact path={'/wms/warehouse'} component={Warehouse}></Route>
                    <Route exact path={'/wms/product'} component={Product}></Route>
                    <Route exact path={'/wms/product/create'} component={ProductCreate}></Route>
                    <Route exact path={'/wms/receipt/car'} component={CarReceipt}></Route>
                    <Route exact path={'/wms/receipt/car/create'} component={CarReceiptCreate}></Route>
                    <Route exact path={'/wms/receipt/car/list'} component={CarReceiptList}></Route>
                    <Route exact path={'/wms/delivery/car'} component={CarDelivery}></Route>
                    <Route exact path={'/wms/sku/car'} component={CarSku}></Route>
                    <Route exact path={'/wms/sku/car/discount/:id'} component={CarSkuDiscount}></Route>
                    <Route exact path={'/wms/sku/car/lock/:id'} component={CarSkuLock}></Route>
                    <Route exact path={'/wms/sku/car/adjust/:id'} component={CarSkuAdjust}></Route>
                    <Route exact path={'/wms/sku/car/list'} component={CarSkuList}></Route>
                    <Route exact path={'/wms/order/car'} component={CarOrder}></Route>
                    <Route exact path={'/wms/order/car/match'} component={CarOrderMatch}></Route>
                    <Route exact path={'/wms/receipt/part'} component={PartReceipt}></Route>
                    <Route exact path={'/wms/receipt/part/create'} component={PartReceiptCreate}></Route>
                    <Route exact path={'/wms/receipt/part/detail'} component={PartReceiptDetail}></Route>
                    <Route exact path={'/wms/receipt/part/list'} component={PartReceiptList}></Route>
                    <Route exact path={'/wms/delivery/part'} component={PartDelivery}></Route>
                    <Route exact path={'/wms/sku/part'} component={PartSku}></Route>
                    <Route exact path={'/wms/sku/part/info'} component={PartSkuInfo}></Route>
                    <Route exact path={'/wms/order/part'} component={PartOrder}></Route>
                    <Route exact path={'/wms/order/part/defence'} component={PartOrderDefence}></Route>
                    <Route exact path={'/wms/sku/article'} component={ArticleSku}></Route>
                    <Route exact path={'/wms/sku/article/package'} component={ArticleSkuPackage}></Route>

                    <Route exact path={'/finance/receviable'} component={Receviable}></Route>
                    <Route exact path={'/finance/prereclist'} component={Prereclist}></Route>
                    <Route exact path={'/finance/prereclock'} component={Prereclock}></Route>
                    <Route exact path={'/finance/prerecreq'} component={Prerecreq}></Route>
                    <Route exact path={'/finance/prebackreq'} component={Prebackreq}></Route>
                    <Route exact path={'/finance/prerec'} component={Prerec}></Route>
                    <Route exact path={'/finance/preback'} component={Preback}></Route>
                    <Route exact path={'/finance/prebalance'} component={Prebalance}></Route>

                </Switch>
            </div>
        );
    }
}

export default Home;
