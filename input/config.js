const fs = require("fs");
const width = 1000;
const height = 1000;
const dir = __dirname;
const description = "Pillars and Rings by Subtlemint";
const baseImageUri = "https://subtlemint.io/collections/pnr001";
const startEditionFrom = 1;
const endEditionAt = 1000; // wheere to end the generation
const editionSize = 1000; // how many are generated

// Create suites of objects 
// const raceWeights = [
const pillringWeights = [
    {
      value: "artwork",
      from: 1,
      to: editionSize,
    },
  ];

// asset objects 
// const races = {
const pillarsandrings = {  
    artwork: {
      name: "PillarsAndRings",
      layers: [
        {
        // Background 
          name: "Background",
          elements: [

            {   
              id: 0,
              name: "Silver",
              path: `${dir}/background/00A_BG_C6C6C5.png`,
              weight: 90,
           }, 
            {   
                id: 1,
                name: "Dust Storm",
                path: `${dir}/background/00A_BG_E0D2C3.png`,
                weight: 80,

            },

            {
                id: 2,
                name: "Northern Lights Blue",
                path: `${dir}/background/00A_BG_68C7BD.png`,
                weight: 70,
            },
            
         
            {   
                id: 3,
                name: "Deluge",
                path: `${dir}/background/00A_BG_8462AA.png`,
                weight: 60,
            },
          
            {   
                id: 4,
                name: "Flamingo Pink",
                path: `${dir}/background/00A_BG_F7A8A5.png`,
                weight: 50,
            },  
         
            {   
                id: 5,
                name: "Pumpkin Orange",
                path: `${dir}/background/00A_BG_F47B20.png`,
                weight: 40,
            },  

            {   
                id: 6,
                name: "Dawn Pink",
                path: `${dir}/background/00A_BG_FDE6EB.png`,
                weight: 30,
            },  
       
            {   
                id: 7,
                name: "Aureolin",
                path: `${dir}/background/00A_BG_FEE900.png`,
                weight: 20,
            },  

            {
              id: 8,
              name: "Picton Blue",
              path: `${dir}/background/00A_BG_37B8EA.png`,
              weight: 9,
          },

          {   
            id: 9,
            name: "Black Pearl",
            path: `${dir}/background/00A_BG_08151B.png`,
            weight: 1,
        },
        ],
          position: { x: 0, y: 0 },
          size: { width: width, height: height },
      },

    // c0 Directory 
    {
        name: "FirstRing",
        elements: [
          {
            id: 0,
            name: "Petrol",
            path: `${dir}/firstring/000_Circle_015F73.png`,
            weight: 45,
          },
        //   input/c0/000_Circle_015F73.png
          {
            id: 1,
            name: "Vista Blue",
            path: `${dir}/firstring/000_Circle_94D2BD.png`,
            weight: 35,
        },  
        // input/c0/000_Circle_94D2BD.png
       
        {
            id: 2,
            name: "Teal",
            path: `${dir}/firstring/000_Circle_079396.png`,
            weight: 25,
        },  
        // input/c0/000_Circle_079396.png   
      ],

      position: { x: 0, y: 0 },
      size: { width: width, height: height },
    },

          
        //   d1 Directory
        {
          name: "FirstPillar",
          elements: [
            {
              id: 0,
              name: "Pale Rose",
              path: `${dir}/firstpillar/006_Dash_FBC5BC.png`,
              weight: 55,
            },
          //   input/d0/006_Dash_FBC5BC.png
            {
              id: 1,
              name: "Cosmos",
              path: `${dir}/firstpillar/007_Dash_FCD6CE.png`,
              weight: 45,
            },
            
            {
              id: 3,
              name: "Geyser",
              path: `${dir}/firstpillar/012_Dash_D8E2DC.png`,
              weight: 10,
            
            }, 
          //   input/d0/007_Dash_FCD6CE.png
          ],
          position: { x: 0, y: 0 },
          size: { width: width, height: height },
        },  



    // c1 Directory 
              
      {
        name: "SecondRing",
        elements: [
          {
            id: 0,
            name: "Cocoa Brown",
            path: `${dir}/secondring/001_Circle_C96928.png`,
            weight: 45,
          },
        //   input/c1/001_Circle_C96928.png
          {
            id: 1,
            name: "Hampton",
            path: `${dir}/secondring/001_Circle_E9D8A6.png`,
            weight: 30,
          },
        //   input/c1/001_Circle_E9D8A6.png
          {
            id: 2,
            name: "Fire Bush",
            path: `${dir}/secondring/001_Circle_ED9C21.png`,
            weight: 25,
          },
        //   input/c1/001_Circle_ED9C21.png

        ],

        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      
    // c2 Directory 

      {
        name: "ThirdRing",
        elements: [
        {
            id: 0,
            name: "Vivid Auburn",
            path: `${dir}/thirdring/002_Circle_9C2327.png`,
            weight: 40,
        },
        // input/c2/002_Circle_9C2327.png
        
          {
            id: 1,
            name: "Dark Pastel Red",
            path: `${dir}/thirdring/002_Circle_BA4126.png`,
            weight: 30,
        },
        
        // input/c2/002_Circle_BA4126.png

          {
          id: 2,
          name: "Harp",
          path: `${dir}/thirdring/002_Circle_E6F2E3.png`,
          weight: 20,
        
        },
        // input/c2/002_Circle_E6F2E3.png
              
        ],

    position: { x: 0, y: 0 },
    size: { width: width, height: height },
    },

        //   d1 Directory

        {
          name: "SecondPillar",
          elements: [
              {
                  id: 0,
                  name: "Peach Schnapps",
                  path: `${dir}/secondpillar/008_Dash_F9E1DC.png`,
                  weight: 50,
                },
              //   input/d1/008_Dash_F9E1DC.png
                {
                  id: 1,
                  name: "Soft Peach",
                  path: `${dir}/secondpillar/009_Dash_F8EDEB.png`,
                  weight: 35,
                },
              //   input/d1/009_Dash_F8EDEB.png
              {
                id: 2,
                name: "Lavender Pinnocchio",
                path: `${dir}/secondpillar/011_Dash_-E0E0E0.png`,
                weight: 10,
              },

              {
                id: 3,
                name: "Green White",
                path: `${dir}/secondpillar/010_DashTll_E8E8E4.png`,
                weight: 5,
              },
                
          ],
          position: { x: 0, y: 0 },
          size: { width: width, height: height },
        },
  

    
    // c3 Directory 

    {
        name: "FourthRing",
        elements: [
          {
            id: 0,
            name: "Light Apricot",
            path: `${dir}/fourthring/003_Circle_F7D4BA.png`,
            weight: 25,
          },
        //   input/c3/003_Circle_F7D4BA.png
          {
            id: 1,
            name: "Pale Rose",
            path: `${dir}/fourthring/003_Circle_FBC5BC.png`,
            weight: 40,
          },
        
          //   input/c3/003_Circle_FBC5BC.png

          {
            id: 2,
            name: "Cosmos",
            path: `${dir}/fourthring/003_Circle_FCD6CE.png`,
            weight: 35,
          },        
        
        ],

          position: { x: 0, y: 0 },
          size: { width: width, height: height },
        },

        //   input/c3/003_Circle_FCD6CE.png

    // c4 Directory 

    {
        name: "FifthRing",
        elements: [
          {
            id: 0,
            name: "Rose Gold",
            path: `${dir}/fifthring/004_Circle_E8C5BF.png`,
            weight: 40,
          },
    // input/c4/004_Circle_E8C5BF.png
          {
            id: 1,
            name: "Peach Schnapps",
            path: `${dir}/fifthring/004_Circle_F9E1DC.png`,
            weight: 30,
          },
    // input/c4/004_Circle_F9E1DC.png
          {
            id: 2,
            name: "Cosmos",
            path: `${dir}/fifthring/004_Circle_FCD6CE.png`,
            weight: 25,
          },
    // input/c4/004_Circle_FCD6CE.png

        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },

    //   c5 Directory 

    {
        name: "SixthRing",
        elements: [

        //   input/c5/005_Circle_231F20.png
          {
            id: 0,
            name: "Geyser",
            path: `${dir}/sixthring/005_Circle_D8E2DC.png`,
            weight: 25,
          },

        //   input/c5/005_Circle_D8E2DC.png
        {
            id: 1,
            name: "Green White",
            path: `${dir}/sixthring/005_Circle_E8E8E4.png`,
            weight: 35,
          },

        //   input/c5/005_Circle_E8E8E4.png
          {
            id: 2,
            name: "Platinum",
            path: `${dir}/sixthring/005_Circle_EBE4DB.png`,
            weight: 30,
          },
        //   input/c5/005_Circle_EBE4DB.png

        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },


    //   n0 - Directory
      {
        name: "CenterDigit",
        elements: [
          {
            id: 0,
            name: "White Zero ",
            path: `${dir}/centerdigit/013_NumZero_cntr_FFFFFF.png`,
            weight: 55,
          },
          // input/n0/013_NumZero_cntr_FFFFFF.png
          {
            id: 1,
            name: "White Number One",
            path: `${dir}/centerdigit/014_NumOne_cntr_FFFFFF.png`,
            weight: 45,
          },
          // input/n0/014_NumOne_cntr_FFFFFF.png
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
// n1
      {
        name: "TopRightDigit",
        elements: [
          {
            id: 0,
            name: "White Zero",
            path: `${dir}/toprightdigit/017_NumZero_tpr_FFFFFF.png`,
            weight: 45,
          },
        //   input/n1/017_NumZero_tpr_FFFFFF.png
          {
            id: 1,
            name: "White Number One",
            path: `${dir}/toprightdigit/018_NumOne_tpr_FFFFFF.png`,
            weight: 55,
          },
        //  input/n1/018_NumOne_tpr_FFFFFF.png
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },

// n2
      {
        name: "TopLeftDigit",
        elements: [
          {
            id: 0,
            name: "White Zero",
            path: `${dir}/topleftdigit/015_NumZero_tpl_FFFFFF.png`,
            weight: 55,
          },
          //  input/n2/015_NumZero_tpl_FFFFFF.png
          {
            id: 1,
            name: "White Number One",
            path: `${dir}/topleftdigit/016_NumOne_tpl_FFFFFF.png`,
            weight: 45,
          },
        // input/n2/016_NumOne_tpl_FFFFFF.png
    
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },


      {
        name: "BottomRightDigit",
        elements: [
          {
            id: 0,
            name: "White Zero",
            path: `${dir}/bottomrightdigit/019_NumZero_btr_FFFFFF.png`,
            weight: 55,
          },
          //   input/n3/019_NumZero_btr_FFFFFF.png
          {
            id: 1,
            name: "White Number One",
            path: `${dir}/bottomrightdigit/020_NumOne_btr_FFFFFF.png`,
            weight: 45,
          },
          // input/n3/020_NumOne_btr_FFFFFF.png
    
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
     ],
   },
};

module.exports = {
  width,
  height,
  description,
  baseImageUri,
  editionSize,
  startEditionFrom,
  endEditionAt,
  pillarsandrings,
  pillringWeights,

  // races,
  // raceWeights,
};
