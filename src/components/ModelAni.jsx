import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function ModelAni(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/model-ani.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions['Armature|mixamo.com|Layer0'].play()
  }, [])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Hips} />
          <skinnedMesh
            name="Wolf3D_Glasses"
            geometry={nodes.Wolf3D_Glasses.geometry}
            material={materials['Wolf3D_Glasses.001']}
            skeleton={nodes.Wolf3D_Glasses.skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            geometry={nodes.Wolf3D_Hair.geometry}
            material={materials.Wolf3D_Hair}
            skeleton={nodes.Wolf3D_Hair.skeleton}
          />
          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials['Wolf3D_Eye.001']}
            skeleton={nodes.EyeLeft.skeleton}
            morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials['Wolf3D_Eye.001']}
            skeleton={nodes.EyeRight.skeleton}
            morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Body"
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials['Wolf3D_Body.001']}
            skeleton={nodes.Wolf3D_Body.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Body.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Body.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials.Wolf3D_Skin}
            skeleton={nodes.Wolf3D_Head.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom"
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials['Wolf3D_Outfit_Bottom.001']}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            morphTargetDictionary={
              nodes.Wolf3D_Outfit_Bottom.morphTargetDictionary
            }
            morphTargetInfluences={
              nodes.Wolf3D_Outfit_Bottom.morphTargetInfluences
            }
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials['Wolf3D_Outfit_Footwear.001']}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            morphTargetDictionary={
              nodes.Wolf3D_Outfit_Footwear.morphTargetDictionary
            }
            morphTargetInfluences={
              nodes.Wolf3D_Outfit_Footwear.morphTargetInfluences
            }
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials['Wolf3D_Outfit_Top.001']}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            morphTargetDictionary={
              nodes.Wolf3D_Outfit_Top.morphTargetDictionary
            }
            morphTargetInfluences={
              nodes.Wolf3D_Outfit_Top.morphTargetInfluences
            }
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials['Wolf3D_Teeth.001']}
            skeleton={nodes.Wolf3D_Teeth.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/model-ani.glb')