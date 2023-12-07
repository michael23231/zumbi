import React, { createContext, useContext, useEffect, useState } from "react";

//context
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false)
	const [currentPage, setCurrentPage] = useState(0)

	const mobile = {
		mobileMenu,
		setMobileMenu
	}

	const page = {
		currentPage,
		setCurrentPage
	}

	return (
		<AppContext.Provider value={{mobile, page}}>
			{children}
		</AppContext.Provider>
	)
}

export const useApp = () => useContext(AppContext);