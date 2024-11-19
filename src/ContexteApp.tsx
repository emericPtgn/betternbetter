import React, { createContext, useContext, useReducer } from "react";
import { AppContexte } from "./type/AppContexte";
import { AppActions } from "./type/AppActions";
import { AppProviderProps } from "./type/AppProviderProps";
import { AppConsumerProps } from "./type/AppConsumerProps";
// L'état initial avec le typage d'AppContexte
const EtatInitial: AppContexte = {
    programmation: [],
    filtres: [],
    markers: [],
    donneesChargees: false,
    artistes: [],
    error : []
};


// Le reducer typé avec les types d'actions
function reducer(state: AppContexte, action: AppActions): AppContexte {
    switch (action.type) {
      case 'FetchActivitiesDatas':
        console.log('test', action.payload); // Tu peux voir les données ici pour confirmer
        return {
          ...state,
          programmation: action.payload,
          donneesChargees: true,
        };
      // case 'FetchArtistesNames':
      //   console.log('artistes', action.payload);
      //   return {
      //     ...state,
      //     artistes: action.payload
      //   };

        case 'FetchArtistes':
          console.log('ContextApp', action.payload)
          return {
            ...state,
            artistes: action.payload
          }

      default:
        return state;
    }
  }
  

// Le Contexte typé avec les 
const ContexteApp = createContext<{state: AppContexte ; dispatch : React.Dispatch<AppActions>}>({
    state: EtatInitial,
    dispatch: () => undefined // valeur par défault
})

const { Provider, Consumer } = ContexteApp;

function AppProvider({ children }: AppProviderProps) {
    const [state, dispatch] = useReducer(reducer, EtatInitial);
    return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

function AppConsumer({ children } : AppConsumerProps){
    return <Consumer>
            {(value) => {
                if (typeof children === 'function'){
                    return children(value)
                }
                return children;
            }}
        </Consumer>
}

function useAppContext(){
    return useContext(ContexteApp)
}

export { AppProvider, AppConsumer, useAppContext };