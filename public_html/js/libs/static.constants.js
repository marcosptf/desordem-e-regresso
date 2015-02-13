/*******************************************************************************
 * @author:marcosptf@yahoo.com.br
 * @since:19/09/2013
 * @desc:definições das propriedades usadas no game
 ********************************************************************************/
var     btnInicioJogo,
        btnTutorialJogo,
        btnCreditos,
        btnMatarZumbis,
	btnMatarPT, 
	btnMatarTucano, 
	btnMatarGeral,
        btnArregarNoJogo,
        telaInicial,
        tela1,
        tela2,
        tela3,
        grade0,
        grade1,
        grade2,
        grade3,
        grade4,
        grade5,
        grade6,
        tempDados,
        tempJogo,
        subTela2,
        imgZumbiAtual            = 0,
        qtdePontosJogador        = 1,
        pontosJogador            = 0,
        temporizadorGame         = 0,
        faseGradeJogador         = 0,
        zbImg                    = 1,
        carrosselOrdem           = 1,
        BGImagePath              = "file:///root/developer/desordem-e-regresso-master/public_html/img",
//        BGImagePath              = "http://127.0.0.1/thewalkingdeadgame-master/public_html/img",
        BGImage1                 = "/bg/bg1.png",
        BGImage2                 = "/bg/bg2.png",
        BGImage3                 = "/bg/bg3.png",
        BGImage4                 = "/bg/bg4.png",
        BGImage5                 = "/bg/bg5.png",
        armaFaca1                = "/faca1.png",
        armaFaca2                = "/faca2.png",
        armaFogo1                = "/arma1.png",
        armaFogo2                = "/arma2.png",
        armaFogo3                = "/arma3.png",
        armaFogo4                = "/arma4.png",
        armaFogo5                = "/arma5.png",
        armaFogo6                = "/arma6.png",
        noArmaFogo1              = "/noArma1.png",
        noArmaFogo2              = "/noArma2.png",
        imagemUsadaGame          = new Array(),
        temporizadorMilisegundos = 1400,
		//AMBIENTE                 = "prod",
		AMBIENTE                 = "dev";

var qtdeImg    = new Array();
    qtdeImg[0] = 4;
    qtdeImg[1] = 8;
    qtdeImg[2] = 16;
    qtdeImg[3] = 24;
    qtdeImg[4] = 32;
    qtdeImg[5] = 180;

var carrosselCircular      = new Array();
    carrosselCircular[1]   = 1;
    carrosselCircular[2]   = 2;
    carrosselCircular[3]   = 3;
    carrosselCircular[4]   = 4;
    carrosselCircular[5]   = 5;
    carrosselCircular[5]   = 5;
    carrosselCircular[6]   = 6;
    carrosselCircular[7]   = 7;
    carrosselCircular[8]   = 8;
    carrosselCircular[9]   = 9;
    carrosselCircular[10]  = 10;
    carrosselCircular[11]  = 20;
    carrosselCircular[12]  = 30;
    carrosselCircular[13]  = 40;
    carrosselCircular[14]  = 50;
    carrosselCircular[15]  = 60;
    carrosselCircular[16]  = 70;
    carrosselCircular[17]  = 80;
    carrosselCircular[18]  = 90;
    carrosselCircular[19]  = 100;
    carrosselCircular[20]  = 110;
    carrosselCircular[21]  = 120;
    carrosselCircular[22]  = 130;
    carrosselCircular[23]  = 140;
    carrosselCircular[24]  = 150;
    carrosselCircular[25]  = 160;
    carrosselCircular[26]  = 170;
    carrosselCircular[27]  = 180;
    carrosselCircular[28]  = 179;
    carrosselCircular[29]  = 178;
    carrosselCircular[30]  = 177;
    carrosselCircular[31]  = 176;
    carrosselCircular[32]  = 175;
    carrosselCircular[33]  = 174;
    carrosselCircular[34]  = 173;
    carrosselCircular[35]  = 172;
    carrosselCircular[36]  = 171;
    carrosselCircular[37]  = 161;
    carrosselCircular[38]  = 151;
    carrosselCircular[39]  = 141;
    carrosselCircular[40]  = 131;
    carrosselCircular[41]  = 121;
    carrosselCircular[42]  = 111;
    carrosselCircular[43]  = 91;
    carrosselCircular[44]  = 81;
    carrosselCircular[45]  = 71;
    carrosselCircular[46]  = 61;
    carrosselCircular[47]  = 51;
    carrosselCircular[48]  = 41;
    carrosselCircular[49]  = 31;
    carrosselCircular[50]  = 21;
    carrosselCircular[51]  = 11;
    carrosselCircular[52]  = 12;
    carrosselCircular[53]  = 13;
    carrosselCircular[54]  = 14;
    carrosselCircular[55]  = 15;
    carrosselCircular[56]  = 16;
    carrosselCircular[57]  = 17;
    carrosselCircular[58]  = 18;
    carrosselCircular[59]  = 19;
    carrosselCircular[60]  = 29;
    carrosselCircular[61]  = 39;
    carrosselCircular[62]  = 49;
    carrosselCircular[63]  = 59;
    carrosselCircular[64]  = 69;
    carrosselCircular[65]  = 79;
    carrosselCircular[66]  = 89;
    carrosselCircular[67]  = 99;
    carrosselCircular[68]  = 109;
    carrosselCircular[69]  = 119;
    carrosselCircular[70]  = 129;
    carrosselCircular[71]  = 139;
    carrosselCircular[72]  = 149;
    carrosselCircular[73]  = 159;
    carrosselCircular[74]  = 169;
    carrosselCircular[75]  = 168;
    carrosselCircular[76]  = 167;
    carrosselCircular[77]  = 166;
    carrosselCircular[78]  = 165;
    carrosselCircular[79]  = 164;
    carrosselCircular[80]  = 163;
    carrosselCircular[81]  = 162;
    carrosselCircular[82]  = 152;
    carrosselCircular[83]  = 142;
    carrosselCircular[84]  = 132;
    carrosselCircular[85]  = 112;
    carrosselCircular[86]  = 102;
    carrosselCircular[87]  = 92;
    carrosselCircular[88]  = 82;
    carrosselCircular[89]  = 72;
    carrosselCircular[90]  = 62;
    carrosselCircular[91]  = 52;
    carrosselCircular[92]  = 42;
    carrosselCircular[93]  = 32;
    carrosselCircular[94]  = 22;
    carrosselCircular[95]  = 23;
    carrosselCircular[96]  = 24;
    carrosselCircular[97]  = 25;
    carrosselCircular[98]  = 26;
    carrosselCircular[99]  = 27;
    carrosselCircular[100] = 28;
    carrosselCircular[101] = 38;
    carrosselCircular[102] = 48;
    carrosselCircular[103] = 58;
    carrosselCircular[104] = 68;
    carrosselCircular[105] = 78;
    carrosselCircular[106] = 88;
    carrosselCircular[107] = 98;
    carrosselCircular[108] = 108;
    carrosselCircular[109] = 118;
    carrosselCircular[110] = 128;
    carrosselCircular[111] = 138;
    carrosselCircular[112] = 148;
    carrosselCircular[113] = 158;
    carrosselCircular[114] = 157;
    carrosselCircular[115] = 156;
    carrosselCircular[116] = 155;
    carrosselCircular[117] = 154;
    carrosselCircular[118] = 153;
    carrosselCircular[119] = 143;
    carrosselCircular[120] = 133;
    carrosselCircular[121] = 123;
    carrosselCircular[122] = 113;
    carrosselCircular[123] = 103;
    carrosselCircular[124] = 93;
    carrosselCircular[125] = 83;
    carrosselCircular[126] = 73;
    carrosselCircular[127] = 63;
    carrosselCircular[128] = 53;
    carrosselCircular[129] = 43;
    carrosselCircular[130] = 33;
    carrosselCircular[131] = 34;
    carrosselCircular[132] = 35;
    carrosselCircular[133] = 36;
    carrosselCircular[134] = 37;
    carrosselCircular[135] = 47;
    carrosselCircular[136] = 57;
    carrosselCircular[137] = 67;
    carrosselCircular[138] = 77;
    carrosselCircular[139] = 87;
    carrosselCircular[140] = 97;
    carrosselCircular[141] = 107;
    carrosselCircular[142] = 117;
    carrosselCircular[143] = 127;
    carrosselCircular[144] = 137;
    carrosselCircular[145] = 147;
    carrosselCircular[146] = 146;
    carrosselCircular[147] = 145;
    carrosselCircular[148] = 144;
    carrosselCircular[149] = 134;
    carrosselCircular[150] = 124;
    carrosselCircular[151] = 114;
    carrosselCircular[152] = 104;
    carrosselCircular[153] = 94;
    carrosselCircular[154] = 84;
    carrosselCircular[155] = 74;
    carrosselCircular[156] = 64;
    carrosselCircular[157] = 54;
    carrosselCircular[158] = 44;
    carrosselCircular[159] = 45;
    carrosselCircular[160] = 46;
    carrosselCircular[161] = 56;
    carrosselCircular[162] = 66;
    carrosselCircular[163] = 76;
    carrosselCircular[164] = 86;
    carrosselCircular[165] = 96;
    carrosselCircular[166] = 106;
    carrosselCircular[167] = 116;
    carrosselCircular[168] = 126;
    carrosselCircular[169] = 136;
    carrosselCircular[170] = 135;
    carrosselCircular[171] = 125;
    carrosselCircular[172] = 115;
    carrosselCircular[173] = 105;
    carrosselCircular[174] = 95;
    carrosselCircular[175] = 85;
    carrosselCircular[176] = 75;
    carrosselCircular[177] = 65;
    carrosselCircular[178] = 55;
    carrosselCircular[179] = 55;
    carrosselCircular[180] = 55;
