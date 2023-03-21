export * from './radio'
export * from './radio-group'
export * from './use-radio'
export * from './use-radio-group'

// import { useRadio, useRadioGroup } from 'react-aria'
// import { useRadioGroupState, useRadioState } from 'react-stately'
// import { useFocusRing } from 'react-aria'
// import { motion, useReducedMotion } from 'framer-motion'

// // 使用 useRadioGroup hook 和 useRadio hook 来管理 Radio 组件的状态和行为。
// // 使用 useRadioGroup hook 中提供的 labelProps 和 inputProps 来处理 Radio 组件的标签和输入属性。
// // 使用 useRadio hook 中提供的 inputProps 和 labelProps 来处理 Radio 组件的标签和输入属性。
// // 使用 useRadioGroupState hook 来管理 Radio 组件的状态。
// // 使用 useRadioState hook 来管理单个 Radio 组件的状态。
// // 使用 useRadioGroup hook 中提供的 getRadioProps 方法来获取 Radio 组件的属性。
// // 使用 useRadio hook 中提供的 getRadioProps 方法来获取单个 Radio 组件的属性。
// // 使用 motion 组件来添加动画效果。
// // 使用 useReducedMotion hook 来检测用户是否启用了“减少动画”选项，并相应地调整动画效果。
// // 使用 useFocusRing hook 来处理 Radio 组件的焦点状态。
// // 以下是一个简单的 Radio 组件示例，其中使用了上述技术：

// function Radio({ state, radio }) {
//   const ref = useRef()
//   const { inputProps, labelProps } = useRadio(
//     { ...radio, isDisabled: state.isDisabled },
//     state,
//     ref,
//   )
//   const { isFocusVisible, focusProps } = useFocusRing()

//   const shouldReduceMotion = useReducedMotion()

//   const variants = {
//     checked: {
//       scale: 1.2,
//       transition: shouldReduceMotion
//         ? { duration: 0 }
//         : { duration: 0.2, type: 'spring', stiffness: 500, damping: 30 },
//     },
//     unchecked: {
//       scale: 1,
//       transition: shouldReduceMotion
//         ? { duration: 0 }
//         : { duration: 0.2, type: 'spring', stiffness: 500, damping: 30 },
//     },
//   }

//   return (
//     <label {...labelProps}>
//       <motion.div
//         ref={ref}
//         {...inputProps}
//         {...focusProps}
//         animate={state.selectedKey === radio.key ? 'checked' : 'unchecked'}
//         variants={variants}
//         initial="unchecked"
//         tabIndex={state.isDisabled ? undefined : 0}
//         style={{
//           display: 'inline-flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           width: '1.5rem',
//           height: '1.5rem',
//           borderRadius: '50%',
//           border: '2px solid',
//           borderColor: state.isDisabled ? 'gray' : isFocusVisible ? 'blue' : 'black',
//           backgroundColor: state.selectedKey === radio.key ? 'black' : 'transparent',
//           color: state.selectedKey === radio.key ? 'white' : 'black',
//           cursor: state.isDisabled ? undefined : 'pointer',
//         }}
//       >
//         {state.selectedKey === radio.key && (
//           <svg viewBox="0 0 16 16" width="1em" height="1em">
//             <path fill="currentColor" d="M5.5 10.5l-2-2-1 1 3 3 5-5-1-1-4 4z" />
//           </svg>
//         )}
//       </motion.div>
//       {radio.name}
//     </label>
//   )
// }
