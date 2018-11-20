bl_info = {
	"name": "Sketchup to Cities: Skylines Helper",
	"description": "Helps the user convert SketchUp assets to a format recognizable by Cities: Skylines.",
	"author": "CosignCosine",
	"version": (0, 2, 5),
	"location": "Properties > Scene",
	"warning": "This tool is in beta.",
	"wiki_url": "https://community.simtropolis.com/profile/745638-elektrix/",
	"support": "COMMUNITY",
	"category": "UV"
}

import bpy, time

# Operators
class SCSHBlankCanvas(bpy.types.Operator):
	bl_idname = "cosigncosine.scsh_bl_cv"
	bl_label = "Blank Canvas"
	bl_options = {"UNDO"}

	def execute(self, context):
		bpy.ops.object.select_all(action='DESELECT')
		bpy.ops.object.select_all()
		bpy.ops.object.delete()
		return {"FINISHED"}

class SCSHRenderableOperator(bpy.types.Operator):
	bl_idname = "cosigncosine.scsh_sk_rd"
	bl_label = "Batch Mark Correct UVs as Renderable"
	bl_options = {"UNDO"}

	def execute(self, context):
		st = time.clock()
		for mesh in bpy.data.meshes:
			if len(mesh.uv_textures) < 2:
				bpy.data.meshes.remove(mesh)
				bpy.context.scene.update()
				continue
			mesh.uv_textures[[i for i, texture in enumerate(mesh.uv_textures) if texture.name.startswith('ID')][0]].active_render = True
		ms = "Completed %i meshes in %f seconds." % (len(bpy.data.meshes), time.clock() - st)
		self.report({'INFO'}, ms)
		return {"FINISHED"}

# Panels
class SCSHMainPanel(bpy.types.Panel):
	bl_idname = "cosigncosine.scsh_mainpanel"
	bl_label = "Sketchup to Cities: Skylines"
	bl_space_type = "PROPERTIES"
	bl_region_type = "WINDOW"
	bl_context = "scene"

	def draw(self, context):
		scsh_c = self.layout.column(align=True)
		scsh_c.operator("cosigncosine.scsh_bl_cv", text="Blank Canvas", icon="CANCEL")
		scsh_c.operator("cosigncosine.scsh_sk_rd", text="Batch Mark Correct UVs as Renderable", icon="GROUP_UVS")

# Registration

def register():
	print("SCSH Added")
	bpy.utils.register_class(SCSHRenderableOperator);
	bpy.utils.register_class(SCSHBlankCanvas);
	bpy.utils.register_class(SCSHMainPanel);
def unregister():
	print("SCSH Removed")
	bpy.utils.unregister_class(SCSHRenderableOperator);
	bpy.utils.unregister_class(SCSHBlankCanvas);
	bpy.utils.unregister_class(SCSHMainPanel);
