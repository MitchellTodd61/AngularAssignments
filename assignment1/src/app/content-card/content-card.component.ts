import { Component, OnInit } from '@angular/core';
import {ContentList} from '../helper-files/content-list';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  public listContent = new ContentList();
  output: string;

  item1: Content = {
    id: 0,
    author: 'Mitchell Todd',
    imgUrl: 'https://lh3.googleusercontent.com/NB7GiXB242X-yRSXlFI01Td1BrdTaCLRS8vxTGQbDObGZZ2T5ALOcUBfWqRq2jurFlVfeZ9PfsFaJiw7kM-84US1PLs-Ykl4mXWUpvctoY14xCfAhctcHPxeoMlziGwJ4sZ1nr_e12hcx-bcfrylzQv7USKENcvgh2P4qkOqljONARttADThCt5ts2Iftw5lHLDmHaLZqlUPRZEg2wmK-gGzzSGOZqVGygTiNIYr7QvhjvMyOBfHmklTPx_HgYJP_jhic7JtDH5_m5EPWT0RhkGxFlREphdipEt0YbzlKY8vDufJvltcy-tW31qU9yLGu-O_3j6abmS8N4g0mrR4BAqQE8obwIHuSo3JgeC536cEwkrPPvDMzhoerv8XtlOawcyBwvJmTtQbY9UDHqOPN4uEbC7xW0TCUyXncZUomlMg5CohrhseVwoFf6y7x9h6juqUhaAUNEUYA1FCoMZpgtgb_D0r-i_ZTWN4btyKfUFIVlgguT3o__GeWw0alDZtViZTGEwwTk7VBfs0hCmo6xA5v_MIqnokNFmcv2pFrsgoIcjX5BNSpKJHtlzvf5jSHbK2csYhXjItZ3fvogV1hEkKerr0sFIi1A_deu7Qk19Yr92yvOrTNX_Fwv6joHzAABb4Mj4OB-nkMbFBBrUp-LcxLvs-sKj25qwhJOB56Tw0-tLgoSI0PDK-2Ojk=w1409-h943-no?authuser=0',
    type: 'Fox thing',
    title: 'Picture WOW!',
    body: 'Look at the cute face',
    tags: ['Picture, Animal']
  };
  item2: Content = {
    id: 1,
    author: 'Mitchell Todd',
    imgUrl: 'https://lh3.googleusercontent.com/YB6hhme7_2UFTYrIEIFwfzsfjfUZ2IiRlS7j4ggs6lQWORru9hM2Xx_XaBO9wrSlZsCYA0d3u2ap5_g3MrfkW6j54sZm0IN1Ivn-qfm-bZbLWyhU7MEYiW4b0WqVK95IRBUQwkT-dwcrehj-63xSF2Dvf2rOANZZPtDwppMFRXjTMYS2gpPSXFSuoPlg8V-p-CCZ9Cgbxi0O_KSg2MyoWX4xIEt9pudPDUONfyinA_QRZpRO7c1m6h2U_cRFeotFr3oKgTytRui1wMn62EOFzpROt0yKdlgvhWyoCRnXbRqUlKL_0zR0rj4eqBPb7l0VeqMqOOCMgybDr4kO2GFadqudCkW3HV2wMW7Owop43zX6cDHe6bOSCDmypDEcTgWr4PFaYq1iTT827XyzSm3k_2ntg8P1WulNygs1iYZR0ZnXUnm9CuSBzF8b23mOv4DMaH237cjFgNWkMUFjhroQH9bv49MYTsmk1rxtOC7cLL98acwjIvpvoCT_P9AMsVzeR59Ou-tVSf7jPSfy-t7MyRRduSPlthS4PoEelrroX5-zEo2K4tVMFlGXrhcFq_YggHZmpp2d3gRtaWWpDpSdsg17D5indYY6QmOVNvTQ2mdd4cDGA0MV1LuSzbj7jiT9k2gsWrb0_Waidklia148KRr_HafSYBVhsj3hwOxOPG8C9dB13r1QbiZSTo4f=w1600-h900-no?authuser=0',
    type: 'Lamb Sheep Thing',
    title: 'Sheep',
    body: 'He is barely standing up, must be young',
    tags: ['Animal, Picture, Farm']
  };
  item3: Content = {
    id: 2,
    author: 'Mitchell Todd',
    imgUrl: 'https://lh3.googleusercontent.com/fz_tE5skLeNiPG67MMZ0FHfILnRHRcUiwSBeGKJz4ekAWKdKIXIdbqBZ1cnkU_L87DLJaK44QGzZPdhX19GFdxtUzyWAG-DgFsUcJLrjSiqtJOafxB90lET0E0RL7FrvZWCTP8TsWsW-OEvfEc9FM86DC3JruIXGyM7U0SicZZ1GWMl_y7wSL5lik2bjMbSaXkc1qhgljjzfXfkGVxWXY5P2_XK-E5WqRi-xXdmNsJpsFuMdTD7r2XQ5L6g2b2VwJM0FJ6cfih6-pfHsc66JBTQwZ_HomnHuAjkLzY6LlfHHrDX3jj9I1GbbuQVKENr9S8pHf3RI-n88_BStsugZoaBlXQOg7eEIgFEtF6jgyBTzOAs5o26EOQcwv-iuCVmA8W_sIM1ILeM1hm4PTKMfu4c_hvH1LW_3Bh9LFlpUFz9YYtWnPVZ5E_jiNBAFu-bATCr9pWXSw3S3CLlrFyTIxt9zR2eXuB59M7esDQbhdRrtFRwB-k21Abxv-V6Vxn-__awp9PRTE5bjjiszhudMt1bltlIr4SwUoEgDcErnLV4UNMNa8MhtLgppvL3Ag-VMU7o3U0BJgcUpMzBZ7DsZ_-zHXU6rZi2N93Ag6zZzbb5K6RBscYk7TFilKOx4Pz45QPY6d1Is1TdFDnHNgglZZBKnspvN8D41b5zTeGpI2a5UET2xModnYsEpcf4=w1029-h943-no?authuser=0',
    type: 'Koala',
    title: 'Koala',
    body: 'My favourite animal',
    tags: ['Australia, Animal. Nature, Picture']
  };

  constructor() {
    this.listContent.addItem(this.item1);
    this.listContent.addItem(this.item2);
    this.listContent.addItem(this.item3);
    this.output = this.listContent.outputArray(0) + this.listContent.outputArray(1) + this.listContent.outputArray(2);
  }
  ngOnInit(): void {
  }

}
